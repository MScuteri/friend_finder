//import server file
const server = require('././server.js');

server.app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

server.app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "survey.html"));
});