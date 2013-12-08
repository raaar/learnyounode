var readurl = function(url , callback){
	var http = require('http');

	http.get( url, function(res){
		res.setEncoding('utf8');

		var words = [];
		res.on("data" , function(data) {
			words.push(data);
		})

		res.on("end" , function(){
			var poem = words.join('');
			//console.log(poem);

			return callback(poem);	

		});
	});
}

module.exports = readurl;
