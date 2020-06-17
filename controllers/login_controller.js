var db = require("../models");

module.exports = function(app) {
    // GET route
    app.get("/api/login", function(req, res) {
        db.Login.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    // POST route to create a login
    app.post("/login", function(req, res) {
        db.Login.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            userName: req.body.userName,
            password: req.body.password
            //Any other columns?
        }).then(function(data) {
            res.json(data);
        });
    });

    // DELETE route to delete a user account
    app.delete("/login/:id", function(req, res) {
        db.Login.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(data) {
            res.json(data);
        });
    });

    // PUT route to update password (and other things?)
    app.put("/login", function(req, res) {
        db.Login.update({
            password: req.body.password
          // More columns?
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(data) {
            res.json(data);
        });
    });
};
