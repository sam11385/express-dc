const express = require('express');
const app = express();

const things = require('./things.js');

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.use('/things', things);

app.listen(3000);
