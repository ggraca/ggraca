import { expect, test } from '@playwright/test'
import { experience, profile, views } from '../src/content/profile'
import { KINDS, OWNER, projects } from '../src/content/projects'

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

// Checked after each test so errors raised while scrolling or clicking count too.
test.afterEach(() => {
  expect(errors).toEqual([])
})

test('shows the intro', async ({ page }) => {
  await expect(page).toHaveTitle(/^Guilherme Graça/)
  await expect(page.getByRole('heading', { level: 1, name: 'Guilherme Graça' })).toBeVisible()
  await expect(page.getByRole('banner').getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/ggraca/',
  )
})

test('opens on the work view with experience and featured projects', async ({ page }) => {
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Work' })).toHaveAttribute(
    'aria-current',
    'page',
  )
  await expect(page.getByRole('heading', { level: 2, name: 'Experience' })).toBeVisible()
  for (const job of experience) {
    await expect(page.getByRole('heading', { level: 3, name: job.company })).toBeVisible()
  }
  const featured = projects
    .filter((p) => p.featured !== undefined)
    .sort((a, b) => (a.featured ?? 0) - (b.featured ?? 0))
  await expect(page.getByTestId('project-card').getByRole('heading')).toHaveText(
    featured.map((p) => p.title),
  )
})

test('switches to the showcase and back', async ({ page }) => {
  await page.getByRole('link', { name: /See all/ }).click()
  await expect(page).toHaveURL(/#showcase$/)
  await expect(
    page.getByRole('navigation').getByRole('link', { name: 'Showcase' }),
  ).toHaveAttribute('aria-current', 'page')
  const cards = page.getByTestId('project-card')
  await expect(cards).toHaveCount(projects.length)
  await expect(cards.first().getByRole('heading', { level: 3 })).toHaveText(
    projects[0]?.title ?? '',
  )

  await page.getByRole('navigation').getByRole('link', { name: 'Work' }).click()
  await expect(page.getByRole('heading', { level: 2, name: 'Experience' })).toBeVisible()
})

test('filters the showcase by kind', async ({ page }) => {
  await page.goto('/#showcase')
  const cards = page.getByTestId('project-card')
  for (const [kind, label] of Object.entries(KINDS)) {
    const count = projects.filter((p) => p.kind === kind).length
    await page.getByRole('button', { name: `${label} ${count}`, exact: true }).click()
    await expect(cards).toHaveCount(count)
  }
  await page.getByRole('button', { name: `All ${projects.length}`, exact: true }).click()
  await expect(cards).toHaveCount(projects.length)
})

test('shows awards, and collaborators on request', async ({ page }) => {
  const project = projects.find((p) => p.award && p.team.length > 1)
  if (!project?.award) throw new Error('Expected a team project with an award')
  await page.goto('/#showcase')
  const card = page.getByTestId('project-card').filter({ hasText: project.title })
  await expect(card.getByText(project.award)).toBeVisible()
  const others = project.team.filter((name) => name !== OWNER)
  const popover = page.getByRole('dialog')
  await expect(popover).toHaveCount(0)
  await card.getByRole('button', { name: `Team of ${project.team.length}` }).click()
  for (const name of others) await expect(popover.getByText(name)).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(popover).toHaveCount(0)
})

for (const hash of Object.keys(views).map((name) => `#${name}`)) {
  test(`every image loads (${hash})`, async ({ page }) => {
    await page.goto(`/${hash}`)
    for (const img of await page.locator('img').all()) {
      await img.scrollIntoViewIfNeeded()
      await expect
        .poll(() => img.evaluate((el) => (el as HTMLImageElement).naturalWidth))
        .toBeGreaterThan(0)
    }
  })

  test(`external links open safely in a new tab (${hash})`, async ({ page }) => {
    await page.goto(`/${hash}`)
    const links = page.locator('a[href^="http"]')
    // More than the intro's own links, so card and job links must be rendering too.
    expect(await links.count()).toBeGreaterThan(profile.links.length)
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', /noopener/)
    }
  })

  test(`has no horizontal scroll (${hash})`, async ({ page }) => {
    await page.goto(`/${hash}`)
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    )
    expect(overflow).toBe(0)
  })
}

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false })

  test('the work view is already in the HTML', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: profile.name })).toBeVisible()
    await expect(page.getByRole('heading', { level: 2, name: 'Experience' })).toBeVisible()
    await expect(page.getByTestId('project-card')).toHaveCount(
      projects.filter((p) => p.featured !== undefined).length,
    )
  })
})
