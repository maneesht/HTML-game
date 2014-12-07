var express = require('express'),
	livereload = require('connect-livereload'),
    router = express.Router();

var serverPort = process.env.Port || 8000;
var server = express();
var workingDir = "build/";
server.use(livereload());
server.use('/CSS', express.static(workingDir + 'CSS'));
server.use('/lib', express.static(workingDir + 'lib'));
server.get("/", function(req,res) {
	console.log("Hello!");
	res.sendfile(workingDir + "index.html");
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
console.log("server running on port ", serverPort);
server.listen(serverPort);