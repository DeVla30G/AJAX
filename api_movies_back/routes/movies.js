const express = require('express');
const app = express.Router();
const db = require('../config/db');


    app.get('/movies',function(req,res){
    console.log(req.body);

    db.query('SELECT * FROM movies;', function(err, rows){
    if(err){
      res.json({
        msg: 'error'
      });
    }
        else{
            res.json({
                msg: 'succes',
                movies: rows
              });
        console.log(res);
    }
        })
})

module.exports = app;