const express = require('express');
const app = express();

//Simple request time logger
app.use(function(request, response, next) {
  console.log('A new request received at ' + Date.now());

  // This next() function tells the server that more processing is
  // required for the current request and is in the next middleware
  // function/route handler.
  next();
});

app.listen(3000);
