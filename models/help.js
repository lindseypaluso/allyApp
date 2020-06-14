module.exports = function(sequelize, DataTypes) {
    var Help = sequelize.define("Help", {
        title: DataTypes.STRING,
        subject: DataTypes.STRING,
        userId: DataTypes.STRING
    });
    return Help;
};
