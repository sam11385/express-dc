const express = require('express');
const app = express();
const port = 3000;

// Dynamic routing with an ID
app.get('/:id', function(request, response) {
  response.send(`The route id is ${request.params.id}`);
});

// Dynamic routing with a dog breed
app.get('/dogs/breeds/:breed/images/random', function(request, response) {
  response.send(`Dog breed: ${request.params.breed}`);
});

app.listen(port);
