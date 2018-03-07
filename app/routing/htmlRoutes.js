const path = require('path');

module.exports = function(app) {
	app.get("/", function(req, res) {
		// res.sendFile(path.join(__dirname, "home.html"));
		console.log("Home page")
	});

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "survey.html"));
	});
};