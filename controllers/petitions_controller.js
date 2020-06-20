var db = require("../models");

module.exports = function (app) {
    app.get("/petitions", function (req, res) {
        db.Petition.findAll({}).then(function (data) {
            console.log(data);
            res.render("petitions", { data });
        });
    });

    app.post("/petitions", function (req, res) {
        db.Petition.create({
            uid: req.body.petition_userid,
            username: req.body.petition_username,
            title: req.body.title,
            body: req.body.body
        }).then(function (data) {
            res.redirect("/petitions");
        });
    });
};
