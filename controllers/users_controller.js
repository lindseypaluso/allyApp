var db = require("../models");
var passport = require("passport");
var authController = require('../controllers/auth_controller.js');
const { session } = require("passport");

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
        successRedirect: '/users/authenticate',
        failureRedirect: '/users/login'
    }));

    app.get('/users/authenticate', function(req, res) {
        if(req.session.passport){
            console.log(req.session.passport.user);
        
            db.Users.findOne({
                where: {
                    id: req.session.passport.user
                }
            }).then(function(user) {
                console.log(user.dataValues);
                res.send(user.dataValues);
            });
        }
    });
 
    app.post('/users/register', passport.authenticate('local-register', {
        successRedirect: '/',
        failureRedirect: '/users/register'
    }));
 


    function isLoggedIn(req, res, next) {
    
        if (req.isAuthenticated())

            return next();

        res.redirect('/users/login');

    }

};



