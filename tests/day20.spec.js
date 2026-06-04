const { test, expect } = require('@playwright/test');

test('File Upload', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/upload'
    );

    await page.locator('#file-upload')
        .setInputFiles('sample.txt');

    await page.locator('#file-submit')
        .click();

    await expect(
        page.locator('h3')
    ).toContainText(
        'File Uploaded!'
    );

});

test('Login Screenshot', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/login'
    );

    await page.locator('#username')
        .fill('tomsmith');

    await page.locator('#password')
        .fill('SuperSecretPassword!');

    await page.locator(
        'button[type="submit"]'
    ).click();

    await page.screenshot({
        path: 'login-success.png',
        fullPage: true
    });

});

test('Download File', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/download'
    );

    const downloadPromise =
        page.waitForEvent('download');

    await page.getByText(
        'some-file.txt'
    ).click();

    const download =
        await downloadPromise;

    console.log(
        await download.suggestedFilename()
    );

});

/*const { test, expect } = require('@playwright/test');

test('File Download', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/download'
    );

    const downloadPromise =
        page.waitForEvent('download');

    await page.getByText(
        'sample.txt'
    ).click();

    const download =
        await downloadPromise;

    console.log(
        await download.suggestedFilename()
    );

});

const { test, expect } = require('@playwright/test');

test('Login Screenshot', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/login'
    );

    await page.locator('#username')
        .fill('tomsmith');

    await page.locator('#password')
        .fill('SuperSecretPassword!');

    await page.locator(
        'button[type="submit"]'
    ).click();

    await page.screenshot({
        path: 'dashboard.png',
        fullPage: true
    });

});

const { test, expect } = require('@playwright/test');

test('File Upload', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/upload'
    );

    await page.locator('#file-upload')
        .setInputFiles('sample.txt');

    await page.locator('#file-submit')
        .click();

    await expect(
        page.locator('h3')
    ).toContainText(
        'File Uploaded!'
    );

    await page.screenshot({
    path: 'homepage.png',
    fullPage: true
    });

});*/