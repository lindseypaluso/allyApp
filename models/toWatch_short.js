module.exports = function(sequelize, DataTypes) {
    var WatchShortModel = sequelize.define("WatchShortModel", {
        title: DataTypes.STRING,
        streaming_service: DataTypes.STRING,
        link: DataTypes.STRING
    });
    return WatchShortModel;
}