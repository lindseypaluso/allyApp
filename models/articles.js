module.exports = function(sequelize, DataTypes) {
    var Articles = sequelize.define("articles", {
        title: DataTypes.STRING,
        url: DataTypes.STRING
    });
    return Articles;
};