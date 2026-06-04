const { test, expect } =
require('@playwright/test');

test.beforeAll(async () => {

    console.log(
        'Framework Started'
    );

});

test.beforeEach(async ({ page }) => {

    await page.goto(
        'https://practicetestautomation.com/practice-test-login'
    );

});

test.afterEach(
async ({ page }, testInfo) => {

    await page.screenshot({

        path:
        `screenshots/${testInfo.title}.png`

    });

});

test.afterAll(async () => {

    console.log(
        'Framework Finished'
    );

});

test(
'Validate Username',
async ({ page }) => {

    await expect(
        page.locator('#username')
    ).toBeVisible();

});

test(
'Validate Password',
async ({ page }) => {

    await expect(
        page.locator('#password')
    ).toBeVisible();

});

/*const { test, expect } =
require('@playwright/test');

const LoginPage =
require('C:/Users/pc/Desktop/playwright learning/pages/LoginPage');

test.beforeEach(async ({ page }) => {

    await page.goto(
        'https://practicetestautomation.com/practice-test-login'
    );

    const loginPage =
        new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'student',
        'Password123'
    );

});

test.beforeEach(async ({ page }) => {

    await page.goto(
        'https://practicetestautomation.com/practice-test-login'
    );

});

test('Test 1', async ({ page }) => {

    await expect(
        page.locator('#username')
    ).toBeVisible();

});

test('Test 2', async ({ page }) => {

    await expect(
        page.locator('#password')
    ).toBeVisible();

});

test.beforeAll(async () => {

    console.log('Framework Started');

});

test.afterAll(async () => {

    console.log('Framework Finished');

});*/