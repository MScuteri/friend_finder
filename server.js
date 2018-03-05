const friends = require('./app/data/friends.js');
const apiRoutes = require('./app/routing/apiRoutes.js')

const server = function() {
	const express = require('express');
	const bodyParser = require('body-parser');
	const path = require('path');
	const friends = require('./app/data/friends.js')

	const app = express();
	const port = 3000;

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
};

server();

module.exports = server;

//export to routes files
//import friends object