var http = require('http');
var bl = require('bl');

count = 0;
results = [];


function show() {
	for(i = 0 ; i < 3 ; i++)
		console.log(results[i]);
}

function getItems (item) {
	http.get(process.argv[2 + item], function(res){
		res.pipe(bl(function (err, data){
			if (err) 
				return console.error(data);

			results[item] = data.toString();
			count++;

			if (count === 3) 
				show();
		}));
	})
}


for( i = 0 ; i < 3 ; i++) {
	getItems(i);
}

