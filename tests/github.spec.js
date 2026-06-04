const { test, expect } = require('@playwright/test');

test('GitHub Title Validation', async ({ page }) => {

    await page.goto('https://github.com');

    await expect(page).toHaveTitle(/GitHub/);

});