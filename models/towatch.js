var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var toWatch = sequelize.define("To Watch", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING
});
toWatch.sync();
module.exports(toWatch);