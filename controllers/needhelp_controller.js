var db = require("../models");

module.exports = function(app) {
    // GET route to get all the help requests
    app.get("/api/needhelp", function(req, res) {
        db.//model name of db for need help page
        .findAll({}).then(function(data) {
            res.json(data);
        });
    });

    // POST route to save help requests
    app.post("/api/needhelp", function(req, res) {
        db.//model name of db for need help page
        .create({
          subject: req.body.subject,
          body: req.body.body
          //Any other columns?
        }).then(function(newPost) {
          res.json(newPost);
        });
    });

    // DELETE route to delete help requests

    // PUT route to update help requests
};