module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        username: DataTypes.STRING,
        passHash: DataTypes.STRING,
        status: DataTypes.INTEGER
    });
   

    
    return Users;
};


