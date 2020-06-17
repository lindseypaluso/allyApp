var db = require("../models");
var books, articles, childrensBooks, podcasts, towatch;

module.exports = function(app) {
    app.get("/library", function(req, res) {
        db.Articles.findAll({}).then(function(data) {
            //res.json(data);
            articles = data;
        });

        db.Books.findAll({}).then(function(data) {
            books = data;
        });

        db.ChildrensBooks.findAll({}).then(function(data) {
            //res.json(data);
            childrensBooks = data;
        });

        db.Podcasts.findAll({}).then(function(data) {
            //res.json(data);
            podcasts = data;
        });

        // STILL WORKING ON THIS ONE -MEGAN
        db.ToWatch.findAll({}).then(function(data) {
            //res.json(data);
            towatch = data;
        });
        console.log(books);
        res.render("library", { books, childrensBooks,  articles, podcasts, towatch});
    });
};
