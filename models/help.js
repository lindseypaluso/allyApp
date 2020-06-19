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

    Help.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Help.hasMany(models.Messages, {
          onDelete: 'cascade',
          foreignKey: "helpId"
        });
     };

    return Help;
};
