module.exports = function(sequelize, DataTypes) {
    var toWatch = sequelize.define("toWatch", {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        link: DataTypes.STRING
    });
    return toWatch;
};