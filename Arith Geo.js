function ArithGeo(arr) {
	var arith = arr[1] - arr[0];
	var geo = arr[1]/arr[0];
	var isArith = arr.every(function(element, index, array) {
		if(index === 0) {
			return true;
		}
		else {
			return element - arith === arr[index - 1];
		}
	});
	var isGeo = arr.every(function(element, index, array) {
		if(index === 0) {
			return true;
		}
		else {
			return element/geo === arr[index - 1];
		}
	});
	if(isArith) {
		return "Arithmetic";
	}
	else if(isGeo) {
		return "Geometric";
	}
	else {
		return -1;
	}
}