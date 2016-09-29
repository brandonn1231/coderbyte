function LongestWord(sen) {
	var longest = "";
	var count = 0;
	var arr = sen.match(/[a-z0-9]+/gi);
	arr.forEach(function(val) {
		if (val.length > count) {
			longest = val;
			count = val.length;
		}
	});
	return longest;
}