module.exports = function (sequelize, DataTypes) {
    var Signature = sequelize.define("Signature", {
        petitions_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Signature;
};
