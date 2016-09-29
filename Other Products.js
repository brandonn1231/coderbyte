function OtherProducts(arr) {
	var result = [];
	var total = arr.reduce((a,b) => a * b);
	for(var i = 0; i < arr.length; i++) {
		result.push(total/arr[i]);
	}
	return result.join("-");
}