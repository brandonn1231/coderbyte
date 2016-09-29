function CountingMinutes(str) {
	var time = str.split("-");
	var result = convertTime(time[1]) - convertTime(time[0]);
	if(result < 0) {
		result += 24*60;
	}
	return result;
}

function convertTime(str) {
	var total = 0;
	var time = str.split(":");	//[9,00am]
	var hour = parseInt(time[0]*60);
	var min = parseInt(time[1].substr(0,2));
	var amPm = time[1].substr(2);
	total = hour + min;
	return amPm === "pm" ? total += 720 : total;
}