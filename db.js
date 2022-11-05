const pg = require('pg');

const client = new pg.Client('postgres://localhost/retroconsoles');

client.connect();

module.exports = client;
