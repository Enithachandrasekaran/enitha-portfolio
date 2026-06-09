import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const BASE = process.env.SCREENSHOT_URL || 'http://localhost:5173'
const OUT = 'docs/screenshots'

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

await shot('desktop.png', { width: 1440, height: 900, hash: '#about' })
await shot('mobile.png', { width: 390, height: 844, hash: '#about' })
await shot('skills.png', { width: 1440, height: 900, hash: '#skills' })
await shot('projects.png', { width: 1440, height: 900, hash: '#projects' })
await shot('work.png', { width: 1440, height: 900, hash: '#work-experience' })

await browser.close()
