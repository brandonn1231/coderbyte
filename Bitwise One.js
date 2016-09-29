function BitwiseOne(strArr) {
	var result = "";
	var first = strArr[0];
	var second = strArr[1];
	for(var i = 0; i < first.length; i++) {
		if(first[i] === "0" && second[i] === "1") {
			result += "0";
		}
		else {
			result += "1";
		}
	}
	return result;
}