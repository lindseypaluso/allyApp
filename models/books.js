var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
    var books = sequelize.define("Books", {
      title: Sequelize.STRING,
      author: Sequelize.STRING,
      genre: Sequelize.STRING,
      link1: Sequelize.STRING,
      link2: Sequelize.STRING
    });
    Books.sync();
    module.exports(Book);
  };