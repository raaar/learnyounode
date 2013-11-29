var http = require('http');
var url = process.argv[2];

var req = http.get( url , function(res) {
  	console.log("Got response: " + res.statusCode);

  	var results = [];
	
	res.setEncoding('utf8');
	res.on('data', function (item) {
    	//console.log('BODY: ' + item);
    	//results.push(item);
	});
  	console.log(results);

  	/*
	req.on("error" , function(e){
		console.log("error type: " + e.message);
	});
	*/
});

/*
req.on("error" , function(e){
	console.log("error type: " + e.message);
});
*/