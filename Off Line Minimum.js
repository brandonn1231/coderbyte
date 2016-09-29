function OffLineMinimum(strArr) {
	var arr = [];
	var result = [];
	for(var i = 0; i < strArr.length; i++) {
		if(/[0-9]/g.test(strArr[i])) {
			arr.push(strArr[i]);
		}
		else {
			result.push(arr.sort((a,b) => a - b).shift());
		}
	}
	return result.join(",");
}

["5","4","6","E","1","7","E","E","3","2"]