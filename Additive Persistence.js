function AdditivePersistence(num) {
	var arr = num.toString().split("");
	while(arr.length > 1) {
		var total = arr.map(val => parseInt(val)).reduce((a,b) => a + b);
		return 1 + AdditivePersistence(tota);
	}
	return 0;
}