import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const BASE = process.env.SCREENSHOT_URL || 'http://localhost:5173'
const OUT = 'screenshots'

await mkdir(OUT, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage()

async function shot(name, { width, height, hash = '', fullPage = false }) {
  await page.setViewportSize({ width, height })
  await page.goto(`${BASE}/${hash}`, { waitUntil: 'networkidle', timeout: 60000 })
  await page.waitForTimeout(2000)
  await page.screenshot({ path: `${OUT}/${name}`, fullPage })
  console.log(`Saved ${OUT}/${name}`)
}

await shot('home-page.png', { width: 1440, height: 900, hash: '#about' })
await shot('work-experience.png', { width: 1440, height: 900, hash: '#work-experience' })
await shot('internship.png', { width: 1440, height: 900, hash: '#experience' })
await shot('portfolio.png', { width: 1440, height: 900, hash: '#projects' })

await browser.close()
