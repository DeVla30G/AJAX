var express = require('express');
var app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.send({code: 200, message: "Welcome to Api Movies"});
});

module.exports = app;