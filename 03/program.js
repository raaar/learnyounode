var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var lines = str.split('\n') ;


//var str = buf.toString();
//var spl = str.split('\n');

//console.log(split.length - 1);
console.log(lines.length - 1);

