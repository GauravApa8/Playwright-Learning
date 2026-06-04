const { test, expect } = require('@playwright/test');

test('Dropdown Test', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/dropdown'
    );

    await page.locator('#dropdown')
    .selectOption({
        label: 'Option 2'
    });

    await expect(
        page.locator('#dropdown')
    ).toHaveValue('2');

});