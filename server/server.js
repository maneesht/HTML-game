var express = require('express'),
	livereload = require('connect-livereload'),
    router = express.Router(),
    unirest = require('unirest');

var serverPort = process.env.Port || 8000;
var server = express();
var workingDir = "build/";
server.use(livereload());
server.use('/CSS', express.static(workingDir + 'CSS'));
server.use('/lib', express.static(workingDir + 'lib'));
server.get("/", function(req,res) {
	res.sendfile(workingDir + "index.html");
});
server.get("/", function(req,res) {
	res.writeHead(302, {
  		'Location': '/#/home'
  		//add other headers here...
	});
	res.end();
});
server.get('/*.js', function(req,res) {
	res.sendfile(workingDir+ req.params[0] + '.js');
})
server.get('/*.png', function(req,res) {
	res.sendfile(workingDir+ req.params[0] + '.png');
})
server.get('/*.html', function (req, res) {
    res.sendfile(workingDir + req.params[0] + '.html');
});
server.get('/win', function(req, res) {
	unirest.get("https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true&max=20&min=10")
	.header("X-Mashape-Key", "Tuyp0qQfLOmsh41GPPC9Qc1dxYf9p1PZGopjsnznMi0BRFwUpo")
	.end(function (result) {
  		res.json(result.body);
	});
});
console.log("server running on port ", serverPort);
server.listen(serverPort);