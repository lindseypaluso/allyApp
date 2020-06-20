module.exports = function (sequelize, DataTypes) {
    var Messages = sequelize.define("Messages", {
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        helpId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fromId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        toId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
    });

    Messages.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Messages.belongsTo(models.Users, {
          foreignKey: 'fromId'
        });
        Messages.belongsTo(models.Help, {
          foreignKey: 'helpId'
        });
    };

    return Messages;
};
