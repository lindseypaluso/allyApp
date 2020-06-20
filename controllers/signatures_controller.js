var db = require("../models");

module.exports = function (app) {
    app.post("/signatures", function (req, res) {
        db.Signature.create({
            petitions_id: req.body.signature_petitions_id,
            uid: req.body.signature_userid,
        }).then(function (data) {
            res.redirect("/signatures");
        });
    });

    app.get("/signatures", function (req, res) {
        db.Signature.findAll({}).then(function (data) {
            console.log(data);
            res.render("signatures", { data });
        });
    });
};
