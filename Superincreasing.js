function Superincreasing(arr) {
	var counter = true;
	arr.reduce(function(acc,curr) {
		if(acc >= curr) {
			counter = false;
		}
		else {
			return acc + curr;
		}
	});
	return counter;
}

// function Superincreasing(arr) {
// 	var newArr = arr.reverse();
// 	for(var i = 0; i < newArr.length; i++) {
// 		var temp = newArr.slice(i+1).reduce((a,b) => a + b, 0);
// 		if(arr[i] <= temp) {
// 			return false;
// 		} 
// 	}
// 	return true;
// }