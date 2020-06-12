// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("allyApp", "root", "root", {
    host: "localhost",
    port: 8889,
    dialect: "mysql",
    pool: {
        max: 15,
        min: 0,
        idle: 10000
    }
});

// Exports the connection for other files to use
module.exports = sequelize;