function LetterCapitalize(str) {
	var arr = str.split(" ");
	var result = [];
	arr.forEach(function(val) {
		result.push(val.substr(0,1).toUpperCase().concat(val.substr(1)));
	});
	return result.join(" ");
}