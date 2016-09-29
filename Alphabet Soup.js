function AlphabetSoup(str) {
	var newStr = str.split("").sort();
	return newStr.join("");
}