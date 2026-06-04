const { test, expect } = require('@playwright/test');

test('Valid Login with Assertions and Waits', async ({ page }) => {

    // Open Login Page
    await page.goto(
        'https://the-internet.herokuapp.com/login'
    );

    // Enter Username
    await page.locator('#username')
        .fill('tomsmith');

    // Enter Password
    await page.locator('#password')
        .fill('SuperSecretPassword!');

    // Click Login
    await page.locator(
        'button[type="submit"]'
    ).click();

    // Wait for successful navigation
    await page.waitForURL(/secure/);

    // Validate URL
    await expect(page)
        .toHaveURL(/secure/);

    // Validate Success Message
    await expect(
        page.locator('#flash')
    ).toContainText(
        'You logged into a secure area!'
    );

    // Validate Logout Button
    await expect(
        page.locator('.button.secondary.radius')
    ).toBeVisible();

    // Take Screenshot
    await page.screenshot({
        path: 'successful-login.png',
        fullPage: true
    });

    console.log('PASS: Login Test Completed');

});