const {Client} = require('pg');

require('dotenv').config();

const { DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, DB_NAME } = process.env;


const client = new Client({
    host:DB_HOST,
    user:DB_USER,
    port:DB_PORT,
    password:DB_PASSWORD,
    database:DB_NAME
})

module.exports = client
