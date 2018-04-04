// const path = require('path');
const friends = require('../data/friends.js')

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	})

	app.post("/api/friends", function(req, res) {
		let bestMatch = {
      name: '',
      photo: '',
      friendDifference: Infinity
    };

    let userData = req.body;
    let userScores = userData['scores[]'];
    let totalDifference;

    console.log(userData);

    for (let i = 0; i < friends.length; i++) {
      let currentFriend = friends[i];
      totalDifference = 0;


      console.log("Console log 1", currentFriend);
      console.log("Console log 2", currentFriend['scores'])

      if (currentFriend['scores[]']) {
        currentFriend.scores = currentFriend['scores[]'];
      }

      for (let j = 0; j < currentFriend.scores.length; j++) {
        let currentFriendScore = currentFriend.scores[j];
        let currentUserScore = userScores[j];

        console.log("Console log 3", currentFriendScore);
        console.log("Console log 4", currentUserScore);

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

      friends.push(userData);
     res.json(bestMatch);
	});
};