function OverlappingRanges(arr) {
	var result = [];
	var overlap = arr[4];
	arr = arr.slice(0,4).sort((a,b) => a - b);
	for(var i = arr[1]; i <= arr[2]; i++) {
		result.push(arr[i]);
	}
	return result.length >= overlap;
}
