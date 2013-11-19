var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];
var regex = new RegExp(ext , "gm" );

sortIt( path , ext );

function sortIt ( path , ext) {
	fs.readdir( path , function( err , list ){

		list.forEach(function (entry){
			if ( regex.test(entry) ) {
				console.log(entry);
			}
		});

	});	

}

/*

var fs = require('fs')
  var regex = new RegExp('\\.' + process.argv[3] + '$')
  
  fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
      if (regex.test(file))
        console.log(file)
    })
  })


*/