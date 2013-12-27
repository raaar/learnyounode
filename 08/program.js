/* 
	SOLUTION NUMBER ONE
*/

var http = require('http');
var url = process.argv[2];

//console.log('url: ' + url);

http.get( url , function(res) {

	res.setEncoding("utf8");
	var words = [];
	res.on("data" , function(item){
		words.push(item);
	});

	res.on("error" , function(e){
		console.log("error: " + e.message);
	});

	res.on("end" , function(){
		var poem = words.join("");
		console.log(poem.length);
		console.log(poem);
	})
});

