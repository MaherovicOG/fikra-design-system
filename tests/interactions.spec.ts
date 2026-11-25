import { expect, test } from '@playwright/test'

for (const overlay of ['dialog', 'sheet', 'drawer']) {
  test(`${overlay} opens with working form and dismisses by keyboard`, async ({
    page,
  }) => {
    await page.goto(
      `http://127.0.0.1:6006/iframe.html?id=overlays-${overlay}--default&viewMode=story`,
    )
    const trigger = page.getByRole('button', {
      name: `Open ${overlay}`,
      exact: true,
    })
    await trigger.click()
    const dialog = page.getByRole('dialog')
    await expect(
      dialog.getByRole('heading', { name: 'Create something new' }),
    ).toBeVisible()
    await dialog.getByLabel('Project name').fill('A working overlay')
    await dialog.getByRole('button', { name: 'Create project' }).click()
    await expect(dialog.getByRole('status')).toContainText('Project created')
    await page.keyboard.press('Escape')
    await expect(dialog).not.toBeVisible()
    await expect(trigger).toBeFocused()
  })
}

test('dropdown selection reports its action', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6006/iframe.html?id=overlays-dropdown-menu--default&viewMode=story',
  )
  await page.getByRole('button', { name: 'Project actions' }).click()
  await page.getByRole('menuitem', { name: 'Duplicate', exact: true }).click()
  await expect(page.getByRole('status')).toHaveText('Project duplicated')
})

test('tabs render chart and form panels', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6006/iframe.html?id=navigation-tabs--default&viewMode=story',
  )
  await page.getByRole('tab', { name: 'Activity', exact: true }).click()
  await expect(page.locator('[data-slot="chart"]')).toBeVisible()
  await page.getByRole('tab', { name: 'Settings', exact: true }).click()
  await expect(page.getByLabel('Project name')).toBeVisible()
})

test('combobox filters and selects a technology', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6006/iframe.html?id=inputs-combobox--default&viewMode=story',
  )
  await page.getByRole('combobox', { name: 'Search technology' }).fill('Type')
  await page.getByRole('option', { name: 'TypeScript', exact: true }).click()
  await expect(
    page.getByRole('combobox', { name: 'Search technology' }),
  ).toHaveValue('TypeScript')
})

test('toast shows feedback and can be dismissed', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6006/iframe.html?id=feedback-toast--default&viewMode=story',
  )
  await page.getByRole('button', { name: 'Success toast' }).click()
  const toast = page.getByRole('dialog', { name: 'Project saved' })
  await expect(toast).toBeVisible()
  await toast.getByRole('button', { name: 'Close toast', exact: true }).click()
  await expect(toast).not.toBeVisible()
})

test('questionnaire moves between steps and submits', async ({ page }) => {
  await page.goto(
    'http://127.0.0.1:6006/iframe.html?id=inputs-questionnaire--default&viewMode=story',
  )
  await page.getByRole('radio', { name: /Design/ }).check()
  await page.getByRole('button', { name: 'Next', exact: true }).click()
  await page.getByRole('textbox', { name: 'Your name' }).fill('Amina')
  await page.getByRole('button', { name: 'Finish', exact: true }).click()
  await expect(page.getByRole('status')).toHaveText(
    'Thanks! Your workspace is ready.',
  )
})
