const mysql = require("mysql2");
const Sequelize = require('sequelize');

const sequelize = new Sequelize("database", "username", "password", {
    host: "localhost",
    dialect: "mysql",
    database: "allyApp",
    username: "root",
    password: "root"
});

var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "root",
	database: "allyApp"
});

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;
module.exports = sequelize;

// Not sure if this is correct. Still working on this file.
