module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        username: DataTypes.STRING,
        passHash: DataTypes.STRING,
        status: DataTypes.INTEGER
    });

    Users.associate = function(models) {
	    // Associating Author with Posts
	    // When an Author is deleted, also delete any associated Posts
	    Users.hasMany(models.Messages, {
	      onDelete: 'cascade',
	      foreignKey: "fromId"
	    });
	 };
    
    return Users;
};


