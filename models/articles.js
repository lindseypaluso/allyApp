module.exports = function(sequelize, DataTypes) {
    var ArticlesModel = sequelize.define("ArticlesModel", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        link: DataTypes.STRING
    });
    return ArticlesModel;
}