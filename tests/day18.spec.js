const { test, expect } = require('@playwright/test');

test('Count Rows', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/tables'
    );

    const rows =
        await page.locator('#table1 tbody tr').count();

    expect(rows).toBe(4);

});

test('Count Columns', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/tables'
    );

    const columns =
        await page.locator('#table1 thead th').count();

    expect(columns).toBe(6);

});

test('Validate Smith', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/tables'
    );

    await expect(
        page.locator('#table1')
    ).toContainText('Smith');

});

test('Validate Doe', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/tables'
    );

    await expect(
        page.locator('#table1')
    ).toContainText('Doe');

});

test('Print All Rows', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/tables'
    );

    const rows =
        await page.locator(
            '#table1 tbody tr'
        ).allTextContents();

    console.log(rows);

});

/*const { test, expect } = require('@playwright/test');

test('Count Rows', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/tables'
    );

    const rows =
        await page.locator('#table1 tbody tr').count();

    console.log('Rows:', rows);

    expect(rows).toBe(4);

});

test('Count Columns', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/tables'
    );

    const columns =
        await page.locator('#table1 thead th').count();

    console.log('Columns:', columns);

    expect(columns).toBe(6);

});

test('Validate Smith Exists', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/tables'
    );

    await expect(
        page.locator('#table1')
    ).toContainText('Smith');

});

test('Read First Row', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/tables'
    );

    const firstRow =
        await page.locator(
            '#table1 tbody tr'
        ).first().textContent();

    console.log(firstRow);

});

test('Print All Rows', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/tables'
    );

    const rows =
        await page.locator(
            '#table1 tbody tr'
        ).allTextContents();

    console.log(rows);

});*/