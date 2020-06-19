module.exports = function(sequelize, DataTypes) {
    var Articles = sequelize.define("Articles", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        link1: DataTypes.STRING,
        link2: DataTypes.STRING
    });
    return Articles;
};
