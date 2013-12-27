var mymodule = require('./mymodule.js');

var list = process.argv[2];
var ext = process.argv[3];

mymodule( list , ext , function(err , items){
	if(err) {
		console.log("error type: " +  err );
	}

	items.forEach(function(entry) {
		console.log(entry);
	})
	
});


