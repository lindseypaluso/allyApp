module.exports = function(sequelize, DataTypes) {
    var ChildrensBooksModel = sequelize.define("ChildrensBooksModel", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        link1: DataTypes.STRING,
        link2: DataTypes.STRING
    });
    return ChildrensBooksModel;
}