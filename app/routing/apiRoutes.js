//import server.js file
const server = require('././server.js');
const friends = require('./data/friends.js')

app.get("/api/friends", function(req, res) {
	res.json(availableFriends);
})

app.post("/api/friends", function(req, res) {
	$('#submit').on('click', function(event) {
		event.preventDefault();

		let newFriend = {
			name: $('#name').val(),
			photo: $('#photo').val(),
			scores: [
				$('#q1').val(),
				$('#q2').val(),
				$('#q3').val(),
				$('#q4').val(),
				$('#q5').val(),
				$('#q6').val(),
				$('#q7').val(),
				$('#q8').val(),
				$('#q9').val(),
				$('#q10').val()
			]
		}
	console.log(newFriend)
	})
	
})