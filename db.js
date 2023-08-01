const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'password123',
    host: 'db',
    port: '5432',
    database: 'sentence_builder'
});

module.exports = pool;