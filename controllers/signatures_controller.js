var db = require("../models");

module.exports = function (app) {
    app.post("/sign", function (req, res) {
        db.Signature.create({
            petitions_id: req.body.signature_petitions_id,
            uid: 1,
        }).then(function (data) {
            res.redirect("/petitions");
        });
    });
};
