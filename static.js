const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// We could write all of our own middleware functions like this
// We could serve up, via the request object, all of our files
// app.use('/public', function(req, res, next) {
//   console.log(req.url);
//   next();
// });

// However, expess comes with middleware already built in!
// Serves resources from public folder
app.use('/public', express.static('public'));

var owners = [
  {
    id: 1,
    name: 'Adam',
    pets: [
      {
        id: 1,
        name: 'Vera',
        type: 'Dog'
      },
      {
        id: 2,
        name: 'Felix',
        type: 'Cat'
      }
    ]
  },
  {
    id: 2,
    name: 'Kamilah',
    pets: [
      {
        id: 1,
        name: 'Doug',
        type: 'Dog'
      }
    ]
  }
];

// GET /api/owners
app.get('/api/owners', function(req, res, next) {
  res.json(owners);
});

app.post('api/owners', function(req, res) {
  res.send('bill');
});

app.listen(3000);
