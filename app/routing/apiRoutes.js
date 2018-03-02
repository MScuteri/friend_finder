//import server.js file
const server = require('././server.js');
const friends = require('./data/friends.js')

app.get("/api/friends", function(req, res) {
	res.json(availableFriends);
})

app.post("/api/friends", function(req, res) {
	
})