var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var toWatch = sequelize.define("To Watch", {
    title: Sequelize.STRING,
    description: Sequelize.STRING,
    link: Sequelize.STRING
});
toWatch.sync();
module.exports(toWatch);