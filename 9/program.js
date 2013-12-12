var http = require('http');
var bl = require('bl');

count = 0;
results = [];


function show() {
	//console.log(results[0]);
	//console.log(results[1]);
	console.log(results[0]);

}

function getItems (item) {
	http.get(process.argv[3 + item], function(res){
		res.pipe(bl(function (err, data){
			if (err) 
				return console.error(data);
			//results[item] = data.toString();
			results[item] = data.toString();
			//console.log(data.toString());
			if (count === 1) 
				show();
				console.log(results)
		}));
	})
}


for( count ; count < 2 ; count++) {
	getItems(count);
}