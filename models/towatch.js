module.exports = function(sequelize, DataTypes) {
    var ToWatch = sequelize.define("ToWatch", {
        title: DataTypes.STRING,
        source: DataTypes.STRING,
        link1: DataTypes.STRING,
        link2: DataTypes.STRING
    });
    return ToWatch;
};