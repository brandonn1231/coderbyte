function SimpleSymbols(str) {
	for(var i = 0; i < padded.length; i++) {
		if(padded[i].test(/[a-z]/gi)) {
			if(!(padded[i-1] === "+" && padded[i+1] === "+")) {
				return false;
			}
		}
	}
	return true;
}