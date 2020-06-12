var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
    var podcasts = sequelize.define("Podcasts", {
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      link: Sequelize.STRING
    });
    Podcasts.sync();
    module.exports(Podcasts);
  };