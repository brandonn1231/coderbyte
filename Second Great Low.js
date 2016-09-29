function SecondGreatLow(arr) {
	arr = arr.sort((a,b) => a - b);
	var uniqueArr = arr.filter(function(e,i,a) {
		return a.indexOf(e) === i;
	});
	if(uniqueArr.length < 2) {
		return uniqueArr[0] + " " + uniqueArr[0];
	}
	else {
		return uniqueArr[1] + " " + uniqueArr[uniqueArr.length - 2];
	}
}