const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoder({ extended: false }));
app.use(bodyParser.json());

//export to routes files
//import friends object