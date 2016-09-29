function MeanMode(arr) {
	var mean = (arr.reduce((a,b) => a + b))/arr.length;
	var table = {};
	arr.forEach(function(val) {
    !table[val] ? table[val] = 1 : table[val] += 1;
	});
	var result = {num: null, count: 0};
	for(var n in table) {
		if(table[n] > result["count"]) {
			result["count"] = table[n];
			result["num"] = n;
		}
	}
	return mean == result["num"] ? 1 : 0;
}