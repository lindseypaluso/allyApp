var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Articles = sequelize.define("articles", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    link: DataTypes.STRING
});
Articles.sync();
module.exports(Articles);