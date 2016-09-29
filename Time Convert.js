function TimeConvert(num) {
	var hours = Math.round(num/60);
		min = num % 60;
	return hours + ":" + min;
}