var express = require('express');
var app = express();

/* GET home page. */
app.get('/api', function(req, res, next) {
  res.send({code: 200, message: "Welcome to Api Movies"});
});

module.exports = app;