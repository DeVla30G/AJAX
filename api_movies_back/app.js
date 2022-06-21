const { app } = require("express");

app.post(function(req, res, next){
    next();
});