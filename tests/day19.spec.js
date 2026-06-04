const { test, expect } = require('@playwright/test');

test('JS Alert', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    page.on('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.accept();

    });

    await page.getByText(
        'Click for JS Alert'
    ).click();

});

test('Confirm Accept', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    page.on('dialog', async dialog => {

        await dialog.accept();

    });

    await page.getByText(
        'Click for JS Confirm'
    ).click();

    await expect(
        page.locator('#result')
    ).toContainText(
        'You clicked: Ok'
    );

});

test('Confirm Cancel', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    page.on('dialog', async dialog => {

        await dialog.dismiss();

    });

    await page.getByText(
        'Click for JS Confirm'
    ).click();

    await expect(
        page.locator('#result')
    ).toContainText(
        'You clicked: Cancel'
    );

});

test('Prompt', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    page.on('dialog', async dialog => {

        await dialog.accept(
            'Automation Tester'
        );

    });

    await page.getByText(
        'Click for JS Prompt'
    ).click();

    await expect(
        page.locator('#result')
    ).toContainText(
        'Automation Tester'
    );

});

/*const { test, expect } = require('@playwright/test');

test('Handle Prompt', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    page.on('dialog', async dialog => {

        await dialog.accept('Gaurav');

    });

    await page.getByText(
        'Click for JS Prompt'
    ).click();

    await expect(
        page.locator('#result')
    ).toContainText(
        'Gaurav'
    );

});

test('Handle Confirm Cancel', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    page.on('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.dismiss();

    });

    await page.getByText(
        'Click for JS Confirm'
    ).click();

    await expect(
        page.locator('#result')
    ).toContainText(
        'You clicked: Cancel'
    );

});

test('Handle Confirm Accept', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    page.on('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.accept();

    });

    await page.getByText(
        'Click for JS Confirm'
    ).click();

    await expect(
        page.locator('#result')
    ).toContainText(
        'You clicked: Ok'
    );

});
test('Handle Alert', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    page.on('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.accept();

    });

    await page.getByText('Click for JS Alert')
        .click();

});*/