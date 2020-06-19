module.exports = function(sequelize, DataTypes) {
  var Books = sequelize.define("Books", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    link1: DataTypes.STRING,
    link2: DataTypes.STRING,
    link3: DataTypes.STRING
  });
  return Books;
};
