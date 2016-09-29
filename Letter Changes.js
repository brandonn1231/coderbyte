function LetterChanges(str) {
	var newStr = str.replace(/[a-z]/gi, function(char) {
		return (char === "z" || char === "Z") ? "a" : String.fromCharCode(char.charCodeAt() + 1);
	});
	var result = newStr.replace(/[a,e,i,o,u]/gi, function(vowel) {
		return vowel.toUpperCase();
	})
	return result;
}