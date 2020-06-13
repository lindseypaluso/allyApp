module.exports = function(sequelize, DataTypes) {
  var Podcasts = sequelize.define("Podcasts", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING
  });
  return Podcasts;
};
