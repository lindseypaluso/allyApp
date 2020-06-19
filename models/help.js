module.exports = function (sequelize, DataTypes) {
    var Help = sequelize.define("Help", {
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
    });
    return Help;
};
