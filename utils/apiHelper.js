async function getUsers(
    request
) {

    const response =
    await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

    return await response.json();

}

module.exports = {
    getUsers
};