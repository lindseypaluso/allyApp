module.exports = function(sequelize, DataTypes) {
    var ToWatch = sequelize.define("ToWatch", {
        title: DataTypes.STRING,
        streaming_service: DataTypes.STRING,
        link: DataTypes.STRING
    });
    return ToWatch;
};