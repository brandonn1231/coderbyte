function Palindrome(str) { 
    var re = /[^A-Za-z0-9]/g;
    var lower = str.toLowerCase().replace(re,"");
    var reverse = lower.split("").reverse().join("");
    return lower === reverse;
}

//or

// function Palindrome(str) {
// 	var lower = str.split(" ").join("").toLowerCase();
// 	var newStr = lower.split("").reverse().join("");
// 	return lower === newStr;
// }
