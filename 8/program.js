var http = require('http');
var url = process.argv[2];

console.log('url: ' + url);

var req = http.get( url , function(res) {
	//res.setEncoding("utf8");

	res.on("data" , function(item){

		//console.log(item.length - 1);
		console.log(item);
	});

	res.on("error" , function(e){
		console.log("error: " + e.message);
	});

	res.on("end" , function(){
		console.log("end");
	})
});

