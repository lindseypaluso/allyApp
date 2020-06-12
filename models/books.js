var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var books = sequelize.define("books", {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
  link1: Sequelize.STRING,
  link2: Sequelize.STRING
});

books.sync();

module.exports = books;
