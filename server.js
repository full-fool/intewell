var express = require("express");
var app     = express();
var path    = require("path");
var favicon = require("serve-favicon")

app.use(express.static('public'));
app.use(favicon(__dirname + "/public/img/favicon.ico"));

app.get('/*',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(80);