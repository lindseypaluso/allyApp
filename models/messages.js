module.exports = function (sequelize, DataTypes) {
    var Messages = sequelize.define("Messages", {
        fromId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        toId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subject: {
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

    return Messages;
};
