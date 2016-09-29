function RectangleArea(strArr) {
	var x = strArr.map(val => val.match(/\d/g)[0]).sort((a,b) => a - b);
	var y = strArr.map(val => val.match(/\d/g)[1]).sort((a,b) => a - b);
	var width = Math.abs(x[2] - x[0]);
	var height = Math.abs(y[2] - y[0]);
	return width * height;
}


//[(0,0),(0,3),(3,0),(3,3)]
//x = [0,0,3,3]
//y = [0,0,3,3]