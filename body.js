const express = require('express');
const app = express();
const port = 3000;

// Dynamic routing with a dog breed
app.post('todos', function(request, response) {
  console.log(request.body);
});

app.listen(port);
