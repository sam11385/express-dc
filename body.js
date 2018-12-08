const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let todoList = [{ key: 'test' }];

app.post('/api/todos/', function(req, res) {
  todoList.push(req.body);
  res.send(todoList);
});

app.listen(port);
