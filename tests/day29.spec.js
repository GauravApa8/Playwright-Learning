const { test, expect } =
require('@playwright/test');

test(
'GET Users',
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
'POST User',
async ({ request }) => {

    const response =
    await request.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            data: {
                name: 'Saurav'
            }
        }
    );

    expect(
        response.status()
    ).toBe(201);

});

test(
'PUT User',
async ({ request }) => {

    const response =
    await request.put(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            data: {
                name: 'Updated User'
            }
        }
    );

    expect(
        response.status()
    ).toBe(200);

});

test(
'DELETE User',
async ({ request }) => {

    const response =
    await request.delete(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(
        response.status()
    ).toBe(200);

});

/*const { test, expect } =
require('@playwright/test');

test(
'GET Users',
async ({ request }) => {

    const response =
    await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    expect(
        response.status()
    ).toBe(200);

    const body =
    await response.json();

    console.log(body);

});

test(
'Validate User Count',
async ({ request }) => {

    const response =
    await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    const users =
    await response.json();

    expect(
        users.length
    ).toBe(10);

});

test(
'Validate First User',
async ({ request }) => {

    const response =
    await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    const users =
    await response.json();

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
                name: 'Gaurav',
                email: 'gaurav@test.com'
            }
        }
    );

    expect(
        response.status()
    ).toBe(201);

    const body =
    await response.json();

    console.log(body);

});

test(
'Update User',
async ({ request }) => {

    const response =
    await request.put(
        'https://jsonplaceholder.typicode.com/users/1',
        {
            data: {
                name: 'Updated User'
            }
        }
    );

    expect(
        response.status()
    ).toBe(200);

});

test(
'Delete User',
async ({ request }) => {

    const response =
    await request.delete(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(
        response.status()
    ).toBe(200);

});*/