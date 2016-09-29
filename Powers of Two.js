function PowersofTwo(num) {
	var x = 2;
	while (x < num) {
		x *= 2;
	}
	return x === num ? true : false;
}