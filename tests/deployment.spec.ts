import { expect, test } from '@playwright/test'

test('production app opens its bundled Storybook', async ({ page }) => {
  const errors: string[] = []
  await page.goto('http://127.0.0.1:4173/')
  const link = page.getByRole('link', { name: 'Open Storybook' })
  await expect(link).toHaveAttribute('href', '/storybook/')
  const popupPromise = page.waitForEvent('popup')
  await link.click()
  const storybook = await popupPromise
  storybook.on('pageerror', (error) => errors.push(error.message))
  await expect(storybook).toHaveURL(/\/storybook\//)
  await expect(storybook.locator('#storybook-explorer-tree')).toBeVisible()
  expect(errors).toEqual([])
})

test('bundled stories and documentation load under the deployment subdirectory', async ({
  page,
}) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  await page.goto(
    'http://127.0.0.1:4173/storybook/iframe.html?id=inputs-button--default&viewMode=story&globals=theme:dark',
  )
  await expect(
    page.getByRole('button', { name: 'Make something good' }),
  ).toBeVisible()
  await expect(page.locator('html')).toHaveClass(/dark/)
  await page.goto(
    'http://127.0.0.1:4173/storybook/iframe.html?id=foundations-design-tokens--docs&viewMode=docs',
  )
  await expect(
    page.getByRole('heading', { name: 'Design Tokens', exact: true }).first(),
  ).toBeVisible()
  expect(errors).toEqual([])
})
