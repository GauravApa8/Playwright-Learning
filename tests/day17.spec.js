const { test, expect } = require('@playwright/test');

test('Checkbox Validation', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/checkboxes'
    );

    const checkbox =
        page.locator('input[type="checkbox"]').nth(0);

    await checkbox.check();

    await expect(checkbox)
        .toBeChecked();
});

test('Dropdown Validation', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/dropdown'
    );

    await page.locator('#dropdown')
        .selectOption('2');

    await expect(
        page.locator('#dropdown')
    ).toHaveValue('2');
});

test('Radio Button Validation', async ({ page }) => {

    await page.goto(
        'https://demoqa.com/radio-button'
    );

    await page.locator(
        'label[for="yesRadio"]'
    ).click();

    await expect(
        page.locator('.text-success')
    ).toContainText('Yes');
});