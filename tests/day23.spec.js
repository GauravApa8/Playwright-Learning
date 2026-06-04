const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {

    await page.goto(
        'https://practicetestautomation.com/practice-test-login/'
    );

    await page.locator('#username')
        .fill('student');

    await page.locator('#password')
        .fill('Password123');

    await page.getByRole(
        'button',
        { name: 'Submit' }
    ).click();

    await expect(
        page.locator('h1')
    ).toContainText(
        'Logged In Successfully'
    );

});

test('Add Elements', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/add_remove_elements/'
    );

    for(let i=0;i<5;i++){

        await page
            .getByText('Add Element')
            .click();

    }

    expect(
        await page.locator('.added-manually')
        .count()
    ).toBe(5);

});

test('Delete Element', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/add_remove_elements/'
    );

    for(let i=0;i<5;i++){

        await page
            .getByText('Add Element')
            .click();

    }

    await page.locator('.added-manually')
        .nth(2)
        .click();

    expect(
        await page.locator('.added-manually')
        .count()
    ).toBe(4);

});

test('Print Count', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/add_remove_elements/'
    );

    for(let i=0;i<3;i++){

        await page
            .getByText('Add Element')
            .click();

    }

    console.log(
        await page.locator('.added-manually')
        .count()
    );

});