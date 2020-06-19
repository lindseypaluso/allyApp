var bCrypt = require('bcrypt-nodejs');
 
 
module.exports = function(passport, user) {
 
 
    var Users = user;
 
    var LocalStrategy = require('passport-local').Strategy;
 
 
    passport.use('local-register', new LocalStrategy(
 
        {
 
            usernameField: 'username',
 
            passwordField: 'passHash',
 
            passReqToCallback: true // allows us to pass back the entire request to the callback
 
        },
 
 
 
        function(req, username, password, done) {
 
            var generateHash = function(password) {
 
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
            };
 
 
 
            Users.findOne({
                where: {
                    username: username
                }
            }).then(function(user) {
 
                if (user)
 
                {
 
                    return done(null, false, {
                        message: 'That username is already taken'
                    });
 
                } else
 
                {
 
                    var userPassword = generateHash(password);
 
                    var data =
 
                        {
                            username: username,
 
                            passHash: userPassword,
 
                        };
 
                    Users.create(data).then(function(newUser, created) {
 
                        if (!newUser) {
 
                            return done(null, false);
 
                        }
 
                        if (newUser) {
 
                            return done(null, newUser);
 
                        }
 
                    });
 
                }
 
            });
 
        }
 
    ));




    passport.use('local-login', new LocalStrategy(
 
        {
     
            // by default, local strategy uses username and password, we will override with email
     
            usernameField: 'username',
     
            passwordField: 'passHash',
     
            passReqToCallback: true // allows us to pass back the entire request to the callback
     
        },
     
     
        function(req, username, password, done) {
     
            var User = user;
     
            var isValidPassword = function(userpass, password) {
     
                return bCrypt.compareSync(password, userpass);
     
            }
     
            User.findOne({
                where: {
                    username: username
                }
            }).then(function(user) {
     
                if (!user) {
     
                    return done(null, false, {
                        message: 'User does not exist'
                    });
     
                }
     
                if (!isValidPassword(user.passHash, password)) {
     
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                    
     
                }
     
     
                var userinfo = user.get();
                return done(null, userinfo);
     
     
            }).catch(function(err) {
     
                console.log("Error:", err);
     
                return done(null, false, {
                    message: 'Something went wrong with your Login'
                });
     
            });
     
     
        }
     
    ));





    //serialize
passport.serializeUser(function(user, done) {
 
    done(null, user.id);
 
});

// deserialize user 
passport.deserializeUser(function(id, done) {
    Users.findByPk(id).then(function(user) {
        if (user) {
            done(null, user.get());
        } else {
            done(user.errors, null);
        }
 
    });
 
});
 
}

