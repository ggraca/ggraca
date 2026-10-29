import { test } from '@playwright/test'

// Not assertions: writes PNGs to screenshots/ for people and agents to look at.
const sizes = [
  { name: 'phone', width: 375 },
  { name: 'tablet', width: 768 },
  { name: 'desktop', width: 1280 },
]

for (const { name, width } of sizes) {
  test(name, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/')
    for (const img of await page.locator('img').all()) await img.scrollIntoViewIfNeeded()
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true })
    if (name === 'desktop') await page.screenshot({ path: 'screenshots/desktop-top.png' })
  })
}
