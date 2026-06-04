const { test, expect } =
require('@playwright/test');

const {
    getUsers
} = require(
    'C:/Users/pc/Desktop/playwright learning/utils/apiHelper'
);

test(
'GET Users',
async ({ request }) => {

    const users =
    await getUsers(
        request
    );

    expect(
        users.length
    ).toBe(10);

    expect(
        users[0].name
    ).toBe(
        'Leanne Graham'
    );

});

test(
'Create User',
async ({ request }) => {

    const response =
    await request.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            data: {
                name: 'Gaurav'
            }
        }
    );

    expect(
        response.status()
    ).toBe(201);

});


/*const { test, expect } =
require('@playwright/test');

const {
    getUsers
} = require(
    'C:/Users/pc/Desktop/playwright learning/utils/apiHelper'
);

test(
'API Helper Demo',
async ({ request }) => {

    const users =
    await getUsers(
        request
    );

    expect(
        users.length
    ).toBe(10);

});

test(
'Create User',
async ({ request }) => {

    const response =
    await request.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            data: {
                name: 'Gaurab'
            }
        }
    );

    expect(
        response.status()
    ).toBe(201);

});

const response =
await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
        data: {
            name: 'Gaurav'
        }
    }
);

const user =
await response.json();

console.log(
    user.id
);

const { test, expect } =
require('@playwright/test');

test(
'API GET Users',
async ({ request }) => {

    const response =
    await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    expect(
        response.status()
    ).toBe(200);

    const users =
    await response.json();

    console.log(
        users[0].name
    );

});

test(
'Use API Data',
async ({ request, page }) => {

    const response =
    await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    const users =
    await response.json();

    const username =
    users[0].username;

    console.log(
        username
    );

    await page.goto(
        'https://www.google.com'
    );

});*/