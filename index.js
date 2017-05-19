var express = require("express");

var app = express();
var router = require("./route");

app.use("/api", router);

module.exports = app;