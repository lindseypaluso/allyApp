module.exports = function(sequelize, DataTypes) {
    var BooksModel = sequelize.define("BooksModel", {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        link1: DataTypes.STRING,
        link2: DataTypes.STRING
    });
    return BooksModel;
}

// // Example model from boiler plate code
// module.exports = function(sequelize, DataTypes) {
//     var Example = sequelize.define("Example", {
//       text: DataTypes.STRING,
//       description: DataTypes.TEXT
//     });
//     return Example;  
// };
