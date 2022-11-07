const pg = require('pg');

const client = new pg.Client('postgres://localhost/retrogaming');

client.connect();

module.exports = client;
