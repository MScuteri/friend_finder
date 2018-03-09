const path = require('path');
const bodyParser = require('body-parser');
const friends = require('../data/friends.js')

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	})

	app.post("/api/newfriend", function(req, res) {
		let bestMatch = {};

		const newFriend = req.body;

		newFriendObj = {
			name: newFriend.name,
			photo: newFriend.photo,
			scores: newFriend['scores[]']
		};

		friends.forEach(function(friend) {

			let totalDifference = [];
			
			friends.scores.forEach(function(score) {
				let i = 0;
				let matchScores = Math.abs(parseInt(score) - newFriendObj.scores[i]);
				totalDifference.push(matchScores);
				i++
			})

			let addScores = totalDifference.reduce((a, b) => a + b, 0);
			bestMatch.push(addScores);
			totalDifference = []
		})
		
		let matchedFriend = bestMatch.indexOf(Math.min.apply(Math, bestMatch));
		res.json(friends[matchedFriend]);
		friends.push(newFriendObj);
	});
};

    // Note the code here. Our "server" will respond to a user"s survey result
    // Then compare those results against every user in the database.
    // It will then calculate the difference between each of the numbers and the user"s numbers.
    // It will then choose the user with the least differences as the "best friend match."
    // In the case of multiple users with the same result it will choose the first match.
    // After the test, it will push the user to the database.

    // Create a empty object to hold the "best match". We will constantly update it as we loop through all of the options

    // Take the result of the user"s survey POST and parse it. hint: req.body

    // declare an empty variable that will be used to calculate the difference between the users scores and the scores of each user in the database

    // Loop through all the friend possibilities in the database.

   // Loop through all the scores of each friend

   // We calculate the difference between the scores and sum them into the totalDifference (you already have this one )

   // If the sum of differences is less then the differences of the current "best match"

                    // Reset the bestMatch to be the new friend.

    //push the users data to the database
    
   // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page