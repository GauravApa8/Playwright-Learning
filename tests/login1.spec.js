const { test, expect } =
require('@playwright/test');

test(
'Login Test',
async ({ page }) => {

    await page.goto(
        'https://practicetestautomation.com/practice-test-login/'
    );

});