var db = require("../models");

module.exports = function(app) {
    app.get("/api/books", function(req, res) {
        db.Articles.findAll({}).then(function(data) {
            res.json(data);
        });
    });
};
