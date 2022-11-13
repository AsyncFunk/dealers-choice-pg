const express = require('express');
const morgan = require('morgan');
const client = require('./db');
const { pageNotFound, details, homePage } = require('./views');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const data = await client.query('SELECT * FROM retroconsoles');
    const retroGamingConsoles = data.rows;
    res.send(homePage(retroGamingConsoles));
  } catch (err) {
    console.log(err);
  }
});

app.get('/:abbrev', async (req, res) => {
  try {
    const data = await client.query(
      `SELECT * FROM retroconsoles WHERE abbrev = '${req.params.abbrev}'`
    );
    const foundConsole = data.rows[0];
    res.send(details(foundConsole));
  } catch {
    res.send(pageNotFound());
  }
});

app.listen(port, console.log(`Listening on port ${port}`));
