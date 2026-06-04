const { test, expect } = require('@playwright/test');

test('Open New Window', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/windows'
    );

    const pagePromise =
        page.context().waitForEvent('page');

    await page.getByText('Click Here')
        .click();

    const child =
        await pagePromise;

    await child.waitForLoadState();

    console.log(
        await child.title()
    );

});

test('Validate New Window', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/windows'
    );

    const pagePromise =
        page.context().waitForEvent('page');

    await page.getByText('Click Here')
        .click();

    const child =
        await pagePromise;

    await expect(
        child.locator('h3')
    ).toContainText(
        'New Window'
    );

});

test('Parent Child Titles', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/windows'
    );

    console.log(
        'Parent:',
        await page.title()
    );

    const pagePromise =
        page.context().waitForEvent('page');

    await page.getByText('Click Here')
        .click();

    const child =
        await pagePromise;

    console.log(
        'Child:',
        await child.title()
    );

});

test('Count Tabs', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/windows'
    );

    const pagePromise =
        page.context().waitForEvent('page');

    await page.getByText('Click Here')
        .click();

    await pagePromise;

    const pages =
        page.context().pages();

    expect(
        pages.length
    ).toBe(2);

});

/*const { test, expect } = require('@playwright/test');

test('Handle New Window', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/windows'
    );

    const pagePromise =
        page.context().waitForEvent('page');

    await page.getByText('Click Here')
        .click();

    const newPage =
        await pagePromise;

    await newPage.waitForLoadState();

    console.log(
        await newPage.title()
    );

});

test('Validate New Window', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/windows'
    );

    const pagePromise =
        page.context().waitForEvent('page');

    await page.getByText('Click Here')
        .click();

    const newPage =
        await pagePromise;

    await expect(
        newPage.locator('h3')
    ).toContainText(
        'New Window'
    );

});

test('Parent Child Window', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/windows'
    );

    console.log(
        'Parent:',
        await page.title()
    );

    const pagePromise =
        page.context().waitForEvent('page');

    await page.getByText('Click Here')
        .click();

    const child =
        await pagePromise;

    await child.waitForLoadState();

    console.log(
        'Child:',
        await child.title()
    );

});

test('Count Tabs', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/windows'
    );

    const pagePromise =
        page.context().waitForEvent('page');

    await page.getByText('Click Here')
        .click();

    await pagePromise;

    const pages =
        page.context().pages();

    console.log(
        'Total Tabs:',
        pages.length
    );

});*/