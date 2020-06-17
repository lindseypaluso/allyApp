module.exports = function(sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        userName: DataTypes.STRING,
        password: DataTypes.STRING
        // Another other columns?
    });
    return Login;
};