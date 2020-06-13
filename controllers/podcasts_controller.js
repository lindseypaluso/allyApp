var db = require("../models");

module.exports = function(app) {
    app.get("/api/podcasts", function(req, res) {
        db.Articles.findAll({}).then(function(data) {
            res.json(data);
        });
    });
};
