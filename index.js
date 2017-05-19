var express = require("express");

var app = express();

app.set('view engine', 'ejs');
var router = require("./route");

app.use(router);

module.exports = app;