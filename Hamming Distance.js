function HammingDistance(strArr) {
	var first = strArr[0];
	var second = strArr[1];
	var counter = 0;
	for(var i = 0; i < first.length; i++) {
		if(first[i] !== second[i]) {
			counter++;
		}
	}
	return counter;
}

// if you want to use reduce

// function HammingDistance(strArr) { 
// 	var a = strArr[0].split('');
// 	var b = strArr[1].split('');
// 	var c = [];
// 	a.forEach((elem, index) => elem === b[index] ? c.push(0) : c.push(1));
// 	return c.reduce((acc, curr) => acc + curr);
// }