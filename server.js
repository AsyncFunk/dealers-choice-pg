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
    const retroGamingConsoles = await client.query(
      'SELECT * FROM retroconsoles;'
    ).rows; //This should return an array of "row objects", where every object has a property corresponding to a column in that row (i.e {name,abbrev,releaseYear,numberOfPlayers})
    console.log(retroGamingConsoles); //I would appreciate some help figuring out why this returns undefined.
    res.send(homePage(retroGamingConsoles)); //pass the array of game console objects, retroGamingConsoles, to the homePage function which returns html that uses the array.
  } catch (err) {
    console.log(err);
  }
});

app.get('/:abbrev', async (req, res) => {
  try {
    const foundConsole = await client.query(
      `SELECT * FROM retroconsoles WHERE abbrev = '${req.params.abbrev}';`
    ).rows[0];
    res.send(details(foundConsole));
  } catch {
    res.send(pageNotFound());
  }
});

app.listen(port, console.log(`Listening on port ${port}`));
