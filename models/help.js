module.exports = function(sequelize, DataTypes) {
    var Help = sequelize.define("Help", {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        userId: DataTypes.STRING
    });
    return Help;
};
