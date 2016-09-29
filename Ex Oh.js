function ExOh(str) {
	var x = 0; var o = 0;
	for(var i = 0; i < str.length; i++) {
		(str[i] === "x") ? x++ : o++;
	}
	return x === o;
}