const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(port, function() {
	console.log('Appppp listening on PORT ' + port);
});


//export to routes files
//import friends object