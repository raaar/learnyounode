var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var source = process.argv[2];

//var test = "abc";

var server = http.createServer(function ( req , res ) {
	res.writeHead(200 , {'Content-Type' : 'text/plain'});
	//fs.createReadStream( process.argv[2] ).pipe(res);
	res.end();
});

server.listen(8000);

