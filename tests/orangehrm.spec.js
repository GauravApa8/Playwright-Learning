const { test, expect } = require('@playwright/test');

test('OrangeHRM Login Page', async ({ page }) => {

    await page.goto(
        'https://opensource-demo.orangehrmlive.com/',
        {
            waitUntil: 'networkidle',
            timeout: 60000
        }
    );

    await expect(page).toHaveTitle(/OrangeHRM/);

});