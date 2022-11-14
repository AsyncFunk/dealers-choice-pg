const express = require('express');
const client = require('../db');
const { pageNotFound, details, homePage } = require('../views');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await client.query('SELECT * FROM retroconsoles');
    const retroGamingConsoles = data.rows;
    res.send(homePage(retroGamingConsoles));
  } catch (err) {
    console.log(err);
  }
});

router.get('/:abbrev', async (req, res) => {
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

module.exports = router;
