var fs = require('fs')

var list = function( dir , ext, callback ) {

	var regex = new RegExp(ext , "gm" );


	fs.readdir( dir , function( err , filelist ){
			if(err) {
				return callback(err, filelist);
			}

			filelist.forEach(function (entry){
				if ( regex.test(entry) ) {
					console.log(entry);
				}
			});
			var raf = "raf"
			return callback( filelist );

	});	





	/*
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

	*/
    	

	    
}

module.exports = list;
