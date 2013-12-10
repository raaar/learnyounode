var http = require('http');
var bl = require('bl');

var count = 0;
var results = [];

function getHttp(index){
	http.get(process.argv[2 + index]  , function (res) {
		res.pipe(bl(function (err, data) { 
			if(err)
				return console.error(data);
			
			results[index] = data.toString();


			count++;
			if(count === 3) {
				publish();
			}

		}));
	});	
}

function publish(){
	for(i = 0 ; i < 3 ; i++ ) 
		console.log(results[i]);
}


for(i = 0 ; i < 3 ; i++) 
	getHttp(i);	

