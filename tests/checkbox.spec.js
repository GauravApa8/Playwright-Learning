const { test, expect } = require('@playwright/test');

test('Checkbox Test', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/checkboxes'
    );

    const checkbox1 = page.locator(
        'input[type="checkbox"]'
    ).nth(0);

    await checkbox1.check();

    await expect(checkbox1)
        .toBeChecked();

});