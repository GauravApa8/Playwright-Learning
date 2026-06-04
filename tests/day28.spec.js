const { test, expect } =
require('@playwright/test');

test(
'Intentional Failure',
async ({ page }) => {

    await page.goto(
        'https://www.google.com'
    );

    await expect(
        page.locator('#wrongLocator')
    ).toBeVisible();

});