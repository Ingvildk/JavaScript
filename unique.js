function checkForUnique(arr) {
	var len = arr.length;
	arr = arr.toLowerCase();
	for (var i = 0; i < len; i++) {
		for (var h = i+1; h < len; h++) {
			if (arr[i]=== arr[h]) {
				console.log("Not unique characters");
				return false;
			}
		}
	}
	console.log("All characters are unique");
	return true;
}

checkForUnique("kyr");