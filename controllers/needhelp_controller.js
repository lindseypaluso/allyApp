var db = require("../models");

module.exports = function(app) {
    // GET route to get all the help requests
    app.get("/needhelp", function(req, res) {
        db.Help.findAll({}).then(function(data) {
          console.log(data);
            res.render("helpBlog", { data});

        });
    });

  // POST route to save help requests
  app.post("/needhelp", function (req, res) {
    db.Help.create({
      subject: req.body.subject,
      body: req.body.body
      //Any other columns?
    }).then(function (data) {
      res.json(data);
    });
  });

  // DELETE route to delete help requests
  app.delete("/needhelp/:id", function (req, res) {
    db.Help.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  // PUT route to update help requests
  app.put("/needhelp", function (req, res) {
    db.Help.update({
      subject: req.body.subject,
      body: req.body.body
      //Any other columns?
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (data) {
      res.json(data);
    });
  });
};
