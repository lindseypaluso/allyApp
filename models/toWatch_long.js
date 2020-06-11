module.exports = function(sequelize, DataTypes) {
    var WatchLongModel = sequelize.define("WatchLongModel", {
        title: DataTypes.STRING,
        streaming_service: DataTypes.STRING,
        link: DataTypes.STRING
    });
    return WatchLongModel;
}