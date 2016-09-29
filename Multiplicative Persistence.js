function MultiplicativePersistence(num) {
	var arr = num.toString().split("");
	while(arr.length > 1) {
		var total = arr.map(val => parseInt(val)).reduce((a,b) => a*b);
		return 1 + MultiplicativePersistence(total);
	}
	return 0;
}