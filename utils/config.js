require('dotenv').config();

module.exports = {

    baseUrl:
        process.env.DBASE_URL,

    username:
        process.env.LOGIN_USERNAME,

    password:
        process.env.LOGIN_PASSWORD

};