//import server.js file
const server = require('././server.js');
const friends = require('./data/friends.js')

app.get("/api/friends", function(req, res) {
	res.json(friends);
})

app.post("/api/friends", newFriend, function(req, res) {
	for (let i = 0; i < newFriend.length, i++) {
		let totalDifference = Math.abs(newFriend.scores[i] - friends.scores)
		
	}
})