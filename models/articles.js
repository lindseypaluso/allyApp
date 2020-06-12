var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Articles = sequelize.define("articles", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    link: Sequelize.STRING
});
Articles.sync();
module.exports(Articles);