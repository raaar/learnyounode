var readurl = require('./readurl.js');

var http = require('http');

var url_one = process.argv[2];
var url_two = process.argv[3]; 
var url_three = process.argv[4]; 

//var bl = require('bl');

var urls = [ url_one , url_two , url_three  ];

//http://howtonode.org/control-flow

/*
	Control Flow resource that led me to this solution
	http://book.mixu.net/node/ch7.html
*/

var results = [];

function async(arg, callback) {
	setTimeout(function() { 

		readurl(arg, function(poem){
			callback(poem);
		});

	}, 1000);
}

function final(){};


function read(url) {
	if(url){
		async(url, function(poem){
			results.push(poem);
			console.log(poem);
			return read(urls.shift());
		});
	}
}
read(urls.shift());
