function DivisionStringified(num1,num2)  {
	var ans = Math.round(num1/num2).toString();
	if(ans.length < 4) {
		return ans;
	}
	else {
		ans = ans.split("").reverse();
		for(var i = 2; i < ans.length; i = i + 2) {
			ans[i] += ans[i] + ",";
		}
		return ans.reverse().join("");
	}
}

//utilizing map

// function DivisionStringfield(num1, num2) {
// 	var div = Math.round(num1 / num2);
// 	var div = div.toString().split('').reverse();
// 	var counter = 0;
// 	if(div.length > 3) {
// 		var result = div.map(function(e) {
// 			counter++;
// 			if(counter === 3) {
// 				e = ','.concat(e);
// 				counter = 0;
// 				return e;
// 			}
// 			return e;
// 		});
// 		return result.reverse().join('');
// 	}
// 	return div.reverse().join('');
// }