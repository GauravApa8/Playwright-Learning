const { test, expect } =
require('@playwright/test');

const LoginPage =
require('C:/Users/pc/Desktop/playwright learning/pages/LoginPage');

const users =
require('C:/Users/pc/Desktop/playwright learning/testdata/loginData.json');

users.forEach((user) => {

test(
user.testCase,
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        user.username,
        user.password
    );

    if(user.expected === 'success'){

        await expect(
            page.locator('h1')
        ).toContainText(
            'Logged In Successfully'
        );

        await page.screenshot({
            path:
            `screenshots/${user.username}.png`
        });

    } else {

        await expect(
            page.locator('#error')
        ).toBeVisible();

    }

});

});

/*users.forEach((user) => {

test(
user.testCase,
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        user.username,
        user.password
    );

    if(user.expected === 'success'){

        await expect(
            page.locator('h1')
        ).toContainText(
            'Logged In Successfully'
        );

    } else {

        await expect(
            page.locator('#error')
        ).toBeVisible();

    }

});

});

users.forEach((user) => {

test(
`Login Test - ${user.username}`,
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        user.username,
        user.password
    );

});

});

test(
'Valid Login',
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
'Invalid Login',
async ({ page }) => {

    const loginPage =
        new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'student1',
        'wrongPassword'
    );

    await expect(
        page.locator('#error')
    ).toBeVisible();

});*/