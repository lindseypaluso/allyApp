module.exports = function (sequelize, DataTypes) {
    var Help = sequelize.define("Help", {
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
        }
    });


    Help.associate = function (models) {
        // A Help model can't be created without a Username
        Help.belongsTo(models.Username, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Help;
};
