const mysql = require("mysql");

let db = mysql.createConnection({
  host: "localhost",
  database: "movies",
  user: "vladi",
  password: "password",
  port: "3306",
  multipleStatements: true
});

module.exports = db;