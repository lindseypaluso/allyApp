module.exports = function(sequelize, DataTypes) {
    var PodcastsModel = sequelize.define("PodcastsModel", {
        title: DataTypes.STRING,
        link1: DataTypes.STRING,
        link2: DataTypes.STRING
    });
    return PodcastsModel;
}