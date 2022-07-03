const express = require('express');
const { request } = require('../app');
const app = express.Router();
const db = require('../config/db');

/**All Movies */
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
        console.log(res)
})

/**get one movie by id */
app.get('/movies/:id',function(req,res){
    console.log(req.body);
    const id = req.params.id

    db.query(`SELECT * FROM movies WHERE id = ${id};`, function(err, rows){
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
        console.log(res)
})

/**get genre of selected movie */
app.get('/movies/:id/genres',function(req,res){
    console.log(req.body);
    const id = req.params.id

    db.query(`SELECT name FROM genres INNER JOIN movies ON genre_id = genres.id WHERE movies.id = ${id};`, function(err, rows){
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

/**get producer of movie by id */
app.get('/movies/:id/producers',function(req,res){
    console.log(req.body);
    const id = req.params.id

    db.query(`SELECT name FROM producers INNER JOIN movies ON producer_id = producers.id WHERE movies.id = ${id};`, function(err, rows){
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

// SELECT title FROM movies INNER JOIN genres ON genre_id = genres.id WHERE genres.name = 'drama';

/**get titles of movies by genre */
app.get('/movies/:genre',function(req,res){
    console.log(req.body);
    const genre = req.params.genre

    db.query(`SELECT title FROM movies INNER JOIN genres ON genre_id = genres.id WHERE genres.name = ${genre};`, function(err, rows){
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

/**search query */

app.get('/movies/search', function(req, res){
  console.log(req.body);
  const search = req.query.term

  db.query(`SELECT title FROM movies WHERE name LIKE "'% + ${search} + %'"`, 
  function(err, rows, fields) {
    if (err) throw err;
    var data = [];
    for (i = 0; i < rows.lenght; i++) {
      data.push(rows[i].name);
    }
    res.end(JSON.stringify(data));
  });
});

module.exports = app;{

}