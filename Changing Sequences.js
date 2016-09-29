function ChangingSequence(arr) {
	var x;
	var result;

	(arr[0] < arr[1]) ? x = "increasing" : x = "decreasing";

	if(x === "increasing") {
		arr.forEach(function(e,i,a) {
			if(e > a[i - 1] && e > a[i + 1]) {
				result = i;
			}
		});
	}
	else if (x === "decreasing") {
		arr.forEach(function(e,i,a) {
			if(e < a[i - 1] && e < a[i + 1]) {
				result = i;
			}
		});
	}
	return result ? result : -1
}