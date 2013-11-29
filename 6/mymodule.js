var list = function( dir , ext, callback ) {
	var fs = require('fs')
	var regex = new RegExp('\\.' + ext + "$" );

	fs.readdir( dir , function( err , filelist ){
			if(err){
				return callback(err);
			}

			/* 	Loop through the list, and grab the needed entries by testing the array
				with the regular expression...
			*/ 
			
			var selectedItems = [];
			filelist.forEach(function (entry){
				if ( regex.test(entry) ) {
					selectedItems.push(entry);
				}
			});
			
			/*
				...However I can use the "filter method" to automatically filter the regular expression.
				Shorter and easier
			*/
			selectedItems = filelist.filter(function(file){
				return regex.test(file);
			})

			return callback( null , selectedItems );

	});	
	    
}

module.exports = list;
