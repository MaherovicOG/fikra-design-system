import { readFileSync, readdirSync } from 'node:fs'
import { expect, test } from '@playwright/test'

const index = JSON.parse(
  readFileSync('storybook-static/index.json', 'utf8'),
) as { entries: Record<string, { id: string; type: string; title: string }> }
const entries = Object.values(index.entries).filter(
  (entry) => entry.type === 'story',
)

test('every installed UI module has a story', () => {
  const stories = readdirSync('src/stories')
  for (const file of readdirSync('src/components/ui').filter((f) =>
    f.endsWith('.tsx'),
  )) {
    expect(stories).toContain(file.replace('.tsx', '.stories.tsx'))
  }
})
for (const theme of ['light', 'dark']) {
  for (const story of entries) {
    test(`${theme}: ${story.id}`, async ({ page }) => {
      const errors: string[] = []
      page.on('pageerror', (e) => errors.push(e.message))
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text())
      })
      await page.goto(
        `http://127.0.0.1:6006/iframe.html?id=${story.id}&viewMode=story&globals=theme:${theme}`,
      )
      await expect(page.locator('#storybook-root [data-theme]')).toBeVisible()
      await expect(page.locator('html')).toHaveClass(
        theme === 'dark' ? /dark/ : /^(?!.*dark)/,
      )
      await expect(page.locator('.sb-errordisplay')).not.toBeVisible()
      await page.waitForTimeout(100)
      expect(errors).toEqual([])
    })
  }
}

test('autodocs renders the token reference', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6006/iframe.html?id=foundations-design-tokens--docs&viewMode=docs',
  )
  await expect(
    page.getByRole('heading', { name: 'Design Tokens', exact: true }).first(),
  ).toBeVisible()
})
