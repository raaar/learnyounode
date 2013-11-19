/*

var fs = require('fs');
var foo = process.argv[2] ;
fs.readFile( process.argv[2] , function  ( err , result) {
	if (err) handle(err);
  	sortIt(result);
});

str = foo.toString();
//console.log(foo);

function sortIt(x) {
	str = x.toString();
	lines = str.split('\n');
	console.log(lines.length -1);
}
*/

var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err , contents){
	var lines = contents.toString().split('\n').length - 1
	console.log(lines);
})