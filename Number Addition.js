function NumberAddition(str) {
	var arr = str.match(/\d+/g);
	var sum = arr.map(val => parseInt(val)).reduce((a,b) => a + b);
	return sum;
}