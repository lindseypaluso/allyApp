module.exports = function(sequelize, DataTypes) {
    var ChildrensBooks = sequelize.define("ChildrensBooks", {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      link1: DataTypes.STRING,
      link2: DataTypes.STRING,
      link3: DataTypes.STRING
    });
    return ChildrensBooks;
};
  