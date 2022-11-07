const express = require('express');
const morgan = require('morgan');
const client = require('./db');
const { pageNotFound, details, homePage } = require('./views');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', async (req, res, next) => {
  const retroGamingConsoles = await client.query('SELECT * FROM retroconsoles;')
    .rows;
  console.log(retroGamingConsoles); //I would appreciate some help figuring out why this returns undefined.
  res.send(homePage(retroGamingConsoles));
});

// app.get('/:abbrev', async (req, res, next) => {
//   const foundConsole = await client.query(
//     `SELECT * FROM retroconsoles WHERE abbrev = '${req.params.abbrev}';`
//   ).rows[0];

//   if (foundConsole) {
//     res.send(details(foundConsole));
//   } else {
//     res.send(pageNotFound());
//   }
// });

app.listen(port, console.log(`Listening on port ${port}`));
