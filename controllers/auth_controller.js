var exports = module.exports = {}
 
exports.register = function(req, res) {
 
    res.render('register');
 
}

exports.login = function(req, res) {
 	var referer = req.headers.referer;
    res.render('login', {referer});
 
}
