const friends = require('./app/data/friends.js');
const apiRoutes = require('./app/routing/apiRoutes.js')
require('./app/routing/htmlRoutes.js')(app)

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, function() {
	console.log('App listening on PORT ' + port);
});


//export to routes files
//import friends object