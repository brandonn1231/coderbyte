function SwapCase(str) {
	var lower = /[a-z]/g;
	var upper = /[A-Z]/g;
	var newStr = "";
	for(var i = 0; i < str.length; i++) {
		if(lower.test(str[i])) {
			newStr += str[i].toUpperCase();
		}
		else {
			newStr += str[i].toLowerCase();
		}
	}
	return newStr;
}