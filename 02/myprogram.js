console.log(process.argv.length);

for ( i = 2 ;  i <= process.argv.length ; i++ ) {
	var sum;
	sum += +process.argv[i];
	
	//console.log(process.argv[i]);
	return sum;
}