var express = require("express");
var app     = express();
var path    = require("path");
var http 	= require("http");
var https	= require("https");
var favicon = require("serve-favicon")
var fs 		= require('fs');;

app.use(express.static('public'));
app.use(favicon(__dirname + "/public/img/favicon.ico"));

// app.get('/*',function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

app.get('/*', function (req, res) {
    if(req.protocol === 'https') {
        res.sendFile(__dirname + '/index.html');
    }
    else {
        res.redirect('https://' + req.headers.host + req.url);
    }
});

var options = {
	ca: fs.readFileSync(__dirname + '/certificate/intewelltech_com.ca-bundle'),
	key: fs.readFileSync(__dirname + '/certificate/intewelltech_com.key'),
	cert: fs.readFileSync(__dirname + '/certificate/intewelltech_com.crt')
}

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);



