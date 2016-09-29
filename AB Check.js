function ABCheck(str) {
	for(var i = 0; i < str.length; i++) {
		if(arr[i] === "a") {
			if(arr[i-4] === "b" || arr[i+4] === "b") {
				return true;
			}
		}
	}
	return false;
}