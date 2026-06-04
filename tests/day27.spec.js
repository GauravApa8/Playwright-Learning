require('dotenv').config();

const { test, expect } =
require('@playwright/test');

test(
'Environment Login',
async ({ page }) => {

    console.log(
        process.env.DBASE_URL
    );

    console.log(
        process.env.LOGIN_USERNAME
    );

    await page.goto(
        process.env.DBASE_URL
    );

    await page.locator('#username')
        .fill(
            process.env.LOGIN_USERNAME
        );

    await page.locator('#password')
        .fill(
            process.env.LOGIN_PASSWORD
        );

    await page
        .getByRole(
            'button',
            { name: 'Submit' }
        )
        .click();

    await expect(
        page.locator('h1')
    ).toContainText(
        'Logged In Successfully'
    );

    await page.screenshot({

        path:
        'screenshots/env-login.png',

        fullPage: true

    });

});


/*require('dotenv').config();

const { test, expect } =
require('@playwright/test');

test(
'Login Using Env',
async ({ page }) => {

    console.log('URL:', process.env.BASE_URL);
    console.log('USER:', process.env.LOGIN_USERNAME);
    console.log('PASS:', process.env.LOGIN_PASSWORD);
    
    await page.goto(
        process.env.BASE_URL
    );

    await page.locator('#username')
        .fill(
            process.env.LOGIN_USERNAME
        );

    await page.locator('#password')
        .fill(
            process.env.LOGIN_PASSWORD
        );

    await page
        .getByRole(
            'button',
            { name: 'Submit' }
        )
        .click();

    await expect(
        page.locator('h1')
    ).toContainText(
        'Logged In Successfully'
    );

});

require('dotenv').config();

const { test, expect } =
require('@playwright/test');

test('Read Env Variables', async () => {

    console.log(
        process.env.BASE_URL
    );

    console.log(
        process.env.USERNAME
    );

});*/