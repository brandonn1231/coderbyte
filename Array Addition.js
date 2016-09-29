function ArrayAdditionI(arr) {
	var newArr = arr.sort((a,b) => b - a);
	var max = newArr[0];
	var list = newArr.slice(1);
	var powerSet = [[]];

	for(var i = 0; i < list.length; i++) {
		for(var j = 0, len = powerSet.length; j < len; j++) {
			var temp = powerSet[j].concat(list[i]);
			powerSet.push(temp);
		}
		var sum = temp.reduce(function(acc,curr) {
			return acc + curr;
		});
		if(sum === max) {
			return true;
		}
	}
	return false;
}