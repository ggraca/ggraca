import { expect, test } from '@playwright/test'
import { projects } from '../src/content/projects'

let errors: string[] = []

test.beforeEach(async ({ page }) => {
  errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  await page.goto('/')
  await page.waitForLoadState('networkidle')
})

// Checked after each test so errors raised while scrolling, hovering or tapping count too.
test.afterEach(() => {
  expect(errors).toEqual([])
})

test('shows the intro', async ({ page }) => {
  await expect(page).toHaveTitle('Guilherme Graça')
  await expect(page.getByRole('heading', { level: 1, name: 'Guilherme Graça' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/ggraca/',
  )
})

test('shows one card per project, newest first', async ({ page }) => {
  const cards = page.getByTestId('project-card')
  await expect(cards).toHaveCount(projects.length)
  await expect(cards.first().getByRole('heading', { level: 2 })).toHaveText(
    projects[0]?.title ?? '',
  )
})

test('every image loads', async ({ page }) => {
  for (const img of await page.locator('img').all()) {
    await img.scrollIntoViewIfNeeded()
    await expect
      .poll(() => img.evaluate((el) => (el as HTMLImageElement).naturalWidth))
      .toBeGreaterThan(0)
  }
})

test('external links open safely in a new tab', async ({ page }) => {
  const links = page.locator('a[href^="http"]')
  expect(await links.count()).toBeGreaterThan(projects.length)
  for (const link of await links.all()) {
    await expect(link).toHaveAttribute('target', '_blank')
    await expect(link).toHaveAttribute('rel', /noopener/)
  }
})

test('icons show team and date tooltips', async ({ page, isMobile }) => {
  test.skip(isMobile, 'hover tooltips are a desktop interaction')
  const card = page.getByTestId('project-card').filter({ hasText: 'Collect and Destroy' })
  const team = card.getByRole('button', { name: /^Guilherme Graça, Berkem/ })
  await team.hover()
  await expect(page.getByRole('tooltip')).toContainText('Vassia Vasiladioti')

  await card.getByRole('button', { name: 'March 2019, University' }).hover()
  await expect(
    page.getByRole('tooltip').filter({ hasText: 'March 2019, University' }),
  ).toBeVisible()
  // The team tooltip closes when the pointer moves to the next icon.
  await expect(page.getByRole('tooltip').filter({ hasText: 'Vassia' })).toHaveCount(0)
})

test('has no horizontal scroll', async ({ page }) => {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  )
  expect(overflow).toBe(0)
})

test('tapping an icon toggles its tooltip', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'touch only')
  const card = page.getByTestId('project-card').filter({ hasText: 'Collect and Destroy' })
  const icon = card.getByRole('button', { name: 'March 2019, University' })
  const tooltip = page.getByRole('tooltip').filter({ hasText: 'March 2019, University' })
  await icon.tap()
  await expect(tooltip).toBeVisible()
  await icon.tap()
  await expect(tooltip).toHaveCount(0)
})
