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
  },
  {
    id: 3,
    todo: 'stop by ATV'
  }
];

// GET /api/todos
app.get('/api/todos', function(request, response) {
  response.json(todoList);
});

// GET /api/todos/:id
app.get('/api/todos/:id', function(request, response) {
  response.json(
    todoList.find(function(todo) {
      return todo.id == request.params.id;
    })
  );
});

// POST /api/todos
let nextTodoId = 3;
app.post('/api/todos', function(req, res) {
  const newTodo = req.body;
  newTodo.id = nextTodoId;
  nextTodoId++;
  todoList.push(newTodo);
  res.json(newTodo);
});

// PUT /api/todos/:id
app.put('/api/todos/:id', function(req, res) {
  todoList[req.params.id] = req.body;
  res.send(todoList);
});

// DELETE /api/todos/:id
app.delete('/api/todos/:id', function(req, res) {
  todoList.splice(req.params.id, 1);
  res.send(todoList);
});

app.listen(3000, function() {
  console.log('Todo List API is now listening on port 3000...');
});
