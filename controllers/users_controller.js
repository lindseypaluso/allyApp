var db = require("../models");
var passport = require("passport");
var authController = require('../controllers/auth_controller.js');

module.exports = function(app) {
    app.get("/users", function(req, res) {
    
            db.Users.findAll({
                
            }).then(function(data) {
                console.log(data);
                res.send(data);
            });
        
    });

    app.get('/users/register', authController.register);
    app.get('/users/login', authController.login);

    app.get('/users/logout',authController.logout);

    app.post('/users/login', passport.authenticate('local-login', {
        successRedirect: '/',
 
        failureRedirect: '/users/login'
    }
 
));
    app.post('/users/register', passport.authenticate('local-register', {
        successRedirect: '/',
 
        failureRedirect: '/users/register'
    }
 
));

function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())

        return next();

    res.redirect('/users/login');

}

};




