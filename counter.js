const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serves resources from public folder
app.use('/public-counter', express.static('public-counter'));

let count = 0;

// GET /api/count
app.get('/api/count', function(request, response) {
  response.send(`Count: ${count}`);
  response.end();
});

//POST /api/increment
app.post('/api/increment', function(request, response) {
  count++;
  response.send(`Count: ${count}`);
});

app.post('/api/decrement', function(request, response) {
  count--;
  response.send(`Count: ${count}`);
});

app.listen(3000);
