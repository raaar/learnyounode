var fs = require('fs')

var list = function( directory , extention , callback) {
	if(err) {

		return callback(err);

	} else {

		var regex = new RegExp('\\.' + extention + '$')
				  
		fs.readdir( directory, function (err, list) {
			list.forEach(function (file) {
			   	if (regex.test(file))
				    console.log(file)
			})
		})	
				
	}
    	
	    
}

module.exports = list;
