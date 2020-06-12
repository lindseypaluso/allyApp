var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {

    var podcasts = DataTypes.define("Podcasts", {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      link: DataTypes.STRING
    });
    Podcasts.sync();
    module.exports(Podcasts);
  };