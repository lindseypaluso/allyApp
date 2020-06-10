const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

var booksModel = sequelize.define("booksModel", {
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    link1: {
        type: Sequelize.STRING
    },
    link2: {
        type: Sequelize.STRING
    }
});

booksModel.sync();

module.exports = booksModel;
