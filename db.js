const { Pool } = require('pg');

const pool = new Pool({
    user: 'golte',
    host: 'localhost',
    database: 'golte_ure',
    password: 'trijeploti2021',
    port: 5432

});

module.exports = {
    query(text, params) {
        return pool.query(text, params);
    }
}