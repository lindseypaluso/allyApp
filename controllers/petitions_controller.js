var db = require("../models");

module.exports = function (app) {
    app.get("/petitions", async (req, res) => {
        db.Petition.findAll({}).then(async (data) => {
            petitions = data;
            var newArray = [];
            var newData = {};
                petitions.forEach(async (item, index) =>{
                    db.Signature.findAndCountAll({
                        where: {
                            petitions_id: item.dataValues.id
                        }
                    }).then(function (data) {
                        //petitions[i].sigCount = data.count;
                        Object.assign(item.dataValues, {sigCount: data.count});
                        
                        
                    }); 
                });
                setTimeout(() => { 
                    console.log(petitions);
                    res.render("petitions", { data });
                }, 500);
                
            
        });

    });

    app.post("/petitions", function (req, res) {
        db.Petition.create({
            uid: req.body.petition_userid,
            username: req.body.petition_username,
            title: req.body.title,
            body: req.body.body,
            goal: req.body.goal
        }).then(function (data) {
            res.redirect("/petitions");
        });
    });
};
