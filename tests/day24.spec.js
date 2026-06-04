const { test, expect } =
require('@playwright/test');

const LoginPage =
require('C:/Users/pc/Desktop/playwright learning/pages/LoginPage');

test(
'Login',
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'student',
        'Password123'
    );

    await expect(
    page.locator('h1')
).toContainText(
    'Logged In Successfully'
);

await page.screenshot({
    path: 'screenshots/login-success.png',
    fullPage: true
});

console.log('Screenshot captured successfully');

});

test(
'Logout',
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'student',
        'Password123'
    );

    await loginPage.logout();

});

test(
'Print URL',
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'student',
        'Password123'
    );

    console.log(
        page.url()
    );

});

/*const { test, expect } =
require('@playwright/test');

const LoginPage =
require('C:/Users/pc/Desktop/playwright learning/pages/LoginPage');

test(
'Login using POM',
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'student',
        'Password123'
    );

    await expect(
        page.locator('h1')
    ).toContainText(
        'Logged In Successfully'
    );

});

test(
'Login and Logout',
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'student',
        'Password123'
    );

    await loginPage.logout();

    console.log(
    await loginPage
    .verifyLoginSuccess()
);

});*/