import { test } from '@playwright/test'
import { views } from '../src/content/profile'

// Not assertions: writes PNGs to screenshots/ for people and agents to look at.
const sizes = [
  { size: 'phone', width: 375 },
  { size: 'tablet', width: 768 },
  { size: 'desktop', width: 1280 },
]

for (const { size, width } of sizes) {
  for (const view of Object.keys(views)) {
    test(`${view}-${size}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.goto(`/#${view}`)
      for (const img of await page.locator('img').all()) await img.scrollIntoViewIfNeeded()
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.waitForLoadState('networkidle')
      await page.screenshot({ path: `screenshots/${view}-${size}.png`, fullPage: true })
      if (size === 'desktop') await page.screenshot({ path: `screenshots/${view}-desktop-top.png` })
    })
  }
}
