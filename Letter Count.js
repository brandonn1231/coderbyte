function LetterCountI(str) {
	var words = str.match(/[a-z]+/gi);
	var table = {};
	for(var i = 0, len = words.length; i < len ; i++) {
		var thisWord = words[i];
		table[thisWord] = {};
		table[thisWord]["highest"] = 0;
		for(var j = 0, len2 = thisWord.length; j < len2; j++) {
			var thisChar = thisWord[j];
			!table[thisWord][thisChar] ? table[thisWord][thisChar] = 1 : table[thisWord][thisChar] += 1;
			if(table[thisWord][thisChar] > table[thisWord]["highest"]) {
				table[thisWord]["highest"] = table[thisWord][thisChar];
			}
		}
	}
	var result = {word: null, count: 1};
	for(var w in table) {
		if(table[w]["highest"] > result["count"]) {
			result["count"] = table[w]["highest"];
			result["word"] = w;
		}
	}
	return result["count"] === 1 ? -1 : result["word"];
}