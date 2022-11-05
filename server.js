const express = require('express');
const app = express();
const morgan = require('morgan');
const { pageNotFound, details, homePage } = require('./views');
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.send(homePage(retroGamingConsoles));
});

app.get('/:abbrev', (req, res, next) => {
  const foundConsole = retroGamingConsoles.find(
    console => console.abbrev === req.params.abbrev
  );

  if (foundConsole) {
    res.send(details(foundConsole));
  } else {
    res.send(pageNotFound());
  }
});

app.listen(port, console.log(`Listening on port ${port}`));
