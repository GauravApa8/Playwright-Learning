const { test, expect } = require('@playwright/test');

test('Validate iFrame', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/iframe'
    );

    const frame =
        page.frameLocator('#mce_0_ifr');

    await expect(
        frame.locator('#tinymce')
    ).toBeVisible();

});

test('Read Existing Text', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/iframe'
    );

    const frame =
        page.frameLocator('#mce_0_ifr');

    const text =
        await frame.locator('#tinymce')
        .textContent();

    console.log(text);

});

/*test('Update Text', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/iframe'
    );

    const frame =
        page.frameLocator('iframe');

    await frame.locator('#tinymce')
        .clear();

    await frame.locator('#tinymce')
        .fill('Automation Testing');

    await expect(
        frame.locator('#tinymce')
    ).toContainText(
        'Automation Testing'
    );

});

test('Update Text Again', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/iframe'
    );

    const frame =
        page.frameLocator('iframe');

    await frame.locator('#tinymce')
        .clear();

    await frame.locator('#tinymce')
        .fill(
            'Playwright Learning Day 21'
        );

    await expect(
        frame.locator('#tinymce')
    ).toContainText(
        'Playwright Learning Day 21'
    );

});

/*const { test, expect } = require('@playwright/test');

test('Access iFrame', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/iframe'
    );

    const frame =
        page.frameLocator('#mce_0_ifr');

    await expect(
        frame.locator('#tinymce')
    ).toBeVisible();

});

test('Read Text from iFrame', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/iframe'
    );

    const frame =
    page.frameLocator('iframe');

await expect(
    frame.locator('#tinymce')
).toBeVisible();

const text =
    await frame.locator('#tinymce')
    .textContent();

console.log(text);

});

test('Update Text', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/iframe'
    );

    const frame =
        page.frameLocator('iframe');

    await frame.locator('#tinymce')
        .clear();

    await frame.locator('#tinymce')
        .fill('Automation Testing');

    await expect(
        frame.locator('#tinymce')
    ).toContainText(
        'Automation Testing'
    );

});*/