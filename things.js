const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('GET route on things');
});

router.post('/', function(req, res) {
  res.send('POST route on things');
});

module.exports = router;
