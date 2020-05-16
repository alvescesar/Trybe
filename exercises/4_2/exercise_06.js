let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddAmount = 0;

for (i = 0; i < numbers.length; i += 1) {
	if (numbers[i] % 2 !== 0) {
		oddAmount += 1;
	} else if (numbers[i] % 2 === 0) {
		oddAmount == 0;
	} else {
		console.log("Found no odd value.");
	}
}

console.log(oddAmount);