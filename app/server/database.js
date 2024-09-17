const {Client} = require('pg');
const {DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, DB_DATABASE} = process.env;

const client = new Client({
    host:DB_HOST,
    user:DB_USER,
    port:DB_PORT,
    password:DB_PASSWORD,
    database:DB_DATABASE
})

client.connect()

client.query('SELECT * FROM users', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res.rows);
    client.end();
})

