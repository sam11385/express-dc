const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//setting middleware
app.use(express.static(__dirname + '/public')); //Serves resources from public folder

app.listen(3000);
