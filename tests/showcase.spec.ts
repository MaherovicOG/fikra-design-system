import { expect, test } from '@playwright/test'

test('showcase navigation, light/dark persistence, and component filtering', async ({
  page,
}) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  await page.goto('http://127.0.0.1:4173')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Good ideas deserve',
  )
  await page.evaluate(() => document.fonts.ready)
  await expect(page.locator('h1')).toHaveCSS('font-family', /Source Serif 4/)
  const lightBackground = await page
    .locator('body')
    .evaluate((el) => getComputedStyle(el).backgroundColor)
  await page.getByRole('button', { name: 'Switch to dark theme' }).click()
  await expect
    .poll(() =>
      page
        .locator('body')
        .evaluate((el) => getComputedStyle(el).backgroundColor),
    )
    .not.toBe(lightBackground)
  await expect(page.locator('html')).toHaveClass(/dark/)
  await page.reload()
  await expect(page.locator('html')).toHaveClass(/dark/)
  await page
    .getByRole('button', { name: 'Components', exact: false })
    .first()
    .click()
  await page.getByRole('textbox', { name: 'Search components' }).fill('dialog')
  await expect(page.getByRole('status')).toHaveText('2 components')
  await expect(
    page.getByRole('heading', { name: 'Alert Dialog', exact: true }),
  ).toBeVisible()
  await page.getByRole('textbox', { name: 'Search components' }).fill('zzzz')
  await expect(page.getByText('No components match your search.')).toBeVisible()
  await page.getByRole('button', { name: 'Clear filters' }).click()
  await expect(page.getByRole('status')).toHaveText('63 components')
  expect(errors).toEqual([])
})

test('project form validates, saves, and dialog restores focus', async ({
  page,
}) => {
  await page.goto('http://127.0.0.1:4173')
  const trigger = page.getByRole('button', { name: 'New project', exact: true })
  await trigger.click()
  const dialog = page.getByRole('dialog', { name: 'Start with a good idea.' })
  await dialog.getByRole('button', { name: 'Create project' }).click()
  await expect(dialog.getByRole('alert')).toContainText(
    'Use at least 3 characters',
  )
  await dialog.getByLabel('Project name').fill('A thoughtful project')
  await dialog.getByRole('button', { name: 'Create project' }).click()
  await expect(dialog.getByRole('status')).toContainText('Project created')
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(trigger).toBeFocused()
})

test('table supports search, sorting, selection, and pagination', async ({
  page,
}) => {
  await page.goto('http://127.0.0.1:4173')
  await page.getByRole('textbox', { name: 'Search projects' }).fill('Brand')
  await expect(page.getByRole('row')).toHaveCount(2)
  await page.getByRole('checkbox', { name: 'Select Brand exploration' }).check()
  await expect(page.getByText('1 selected', { exact: true })).toBeVisible()
  await page.getByRole('textbox', { name: 'Search projects' }).fill('')
  await page.getByRole('button', { name: 'Project', exact: true }).click()
  await expect(
    page.getByRole('columnheader', { name: 'Project', exact: true }),
  ).toHaveAttribute('aria-sort', 'descending')
  await page.getByRole('button', { name: 'Next', exact: true }).click()
  await expect(page.getByText('Page 2 of 2')).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'Next', exact: true }),
  ).toBeDisabled()
})

test('mobile navigation and layout fit the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('http://127.0.0.1:4173')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy()
  await page.getByRole('button', { name: 'Toggle Sidebar' }).click()
  await page.getByRole('button', { name: 'Design tokens', exact: true }).click()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'The details that',
  )
})
