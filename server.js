const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./routes/routes');
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.static('public'));
app.use('/', routes);

app.listen(port, console.log(`Listening on port ${port}`));
