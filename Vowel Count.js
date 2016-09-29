function VowelCount(str) {
	var count = 0;
	for(var i = 0; i < str.length; i++) {
    if(/[a,e,i,o,u]/gi.test(str[i])) {
      count++;
    }
  }
	return count;
}