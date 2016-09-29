function WaveSorting(arr) {
	arr = arr.sort((a,b) => b - a);
  console.log(arr);
	var pattern1 = arr.slice(0, Math.ceil(arr.length/2));
	var pattern2 = arr.slice(Math.ceil(arr.length/2));
  console.log(pattern1);
  console.log(pattern2);
	for(var i = 0; i < pattern1.length; i++) {
    if(pattern1[i] <= pattern2[i] || pattern2[i] >= pattern1[i+1]) {
      return false;
		}
    else 
      return true;
	}
}


// arr = [0, 4, 22, 4, 14, 4, 2]
// newArr = arr.sort = [22, 14, 4, 4, 4, 2, 0]
// newArr/2 = [22, 14, 4, 4]
// newArr/2 = [4, 2, 0] --> true

// [4, 2, 1, 1, 1, 1, 0]
// [4, 2, 1, 1]
// [1, 1, 0] --> false