var Sequelize = require("sequelize");

var sequelize = new Sequelize("allyApp", "root", "root", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 15,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;