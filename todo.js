const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let todoList = [
  {
    id: 1,
    todo: 'Implement a REST API'
  },
  {
    id: 2,
    todo: 'get some milk'
  }
];

// GET /api/todos
app.get('/api/todos', function(request, response) {
  response.send(`To do: ${todoList[0].todo}`);
});

// GET /api/todos/:id
app.get('/api/todos/:id', function(request, response) {
  response.send(`To do: ${todoList[0].id}`);
});

// POST /api/todos

// PUT /api/todos/:id

// DELETE /api/todos/:id

app.listen(3000, function() {
  console.log('Todo List API is now listening on port 3000...');
});
