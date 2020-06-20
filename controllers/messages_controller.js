var db = require("../models");

module.exports = function (app) {
  // This route has been tested and is functioning
  app.get("/messages/all/:id", function (req, res) {
    db.Messages.findAll({
      where: {
        toId: req.params.id
      },
      include: [db.Users, db.Help],
    }).then(function (data) {
      
      console.log(data);
      res.render("messages", { messages: data });
      
    });
  });

  app.get("/messages/compose/:toid/:helpid/:parentid", function (req, res) {
      res.render("newmessage", {toid: req.params.toid, helpid: req.params.helpid, parentid: req.params.parentid});
  });

  app.post("/messages/compose", function (req, res) {
      db.Messages.create({
         parentId: req.body.parentid,
         helpId: req.body.helpid,
         fromId: req.body.fromid, // from my uid
         toId: req.body.toid, // from post's uid
         body: req.body.body
    //     //Any other columns?
       }).then(function (data) {
         res.redirect("/helpBlog");
      });
  });
};
