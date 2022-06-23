const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('./config/db.js');
require("dotenv").config();

const port = process.env.PORT || 3000;

const moviesRoute = require('./routes/movies');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(express.json());
global.db = require("./config/db.js");
app.use("/api", moviesRoute);

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.send({code: err.status, message: res.locals.message});
  });

app.get('/', (req, res) => {
    res.send('Hello Vladi!')
  })


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

module.exports = app;