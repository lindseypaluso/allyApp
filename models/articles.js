module.exports = function(sequelize, DataTypes) {
    var Articles = sequelize.define("Articles", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        link: DataTypes.STRING
    });
    return Articles;
};
