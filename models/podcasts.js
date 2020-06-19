module.exports = function(sequelize, DataTypes) {
  var Podcasts = sequelize.define("Podcasts", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    link1: DataTypes.STRING,
    link2: DataTypes.STRING
  });
  return Podcasts;
};
