var mymodule = require('./mymodule.js');

var list = process.argv[2];
var ext = process.argv[3];
var message = "no can do";
mymodule( list , ext , message);