let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowest = 100;

for (i = 0; i < numbers.length; i += 1) {
	if (numbers[i] < lowest) {
		lowest = numbers[i];
	}
}

console.log(lowest);