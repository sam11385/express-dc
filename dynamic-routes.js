const express = require('express');
const app = express();

app.get('/:id', function(req, res) {
  res.send('The route id is ' + req.params.id);
});

app.listen(3000);
