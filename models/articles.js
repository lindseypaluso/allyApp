module.exports = function(sequelize, DataTypes) {
    var Articles = sequelize.define("articles", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        link: DataTypes.STRING
    });
    return Articles;
};