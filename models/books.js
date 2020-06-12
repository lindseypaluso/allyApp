var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
    var books = sequelize.define("Books", {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      genre: DataTypes.STRING,
      link1: DataTypes.STRING,
      link2: DataTypes.STRING
    });
    Books.sync();
    module.exports(Book);
  };