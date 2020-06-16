var db = require("../models");
var all = [];

module.exports = function(app) {
    app.get("/library", function(req, res) {
        db.Articles.findAll({}).then(function(data) {
            res.json(data);
            //all['articles'] = data;
        });

        db.Books.findAll({}).then(function(data) {
            res.json(data);
            //all['books'] = data;
        });

        db.ChildrensBooks.findAll({}).then(function(data) {
            res.json(data);
            //all['childrensbooks'] = data;
        });

        db.Podcasts.findAll({}).then(function(data) {
            res.json(data);
            //all['podcasts'] = data;
        });

        // STILL WORKING ON THIS ONE -MEGAN
        db.ToWatch.findAll({}).then(function(data) {
            //res.json(data);
            //all['towatch'] = data;
        });

        res.render("library", { data: all});
    });
};
