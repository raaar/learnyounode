var http = require('http');

var url_one = process.argv[2];
var url_two = process.argv[3]; 
var url_three = process.argv[4]; 

var bl = require('bl');

console.log(url_one);
console.log(url_two);
console.log(url_three);


/*
http.get( url_one , function (res) {
	res.setEncoding("utf8");
	res.on("data", function(item){
		console.log(item);
	})
})
*/
http.get(url_one)