let test = [23, 67, 9, 1, 105, 98, 340, 32];

function arrayIndexCounter(array) {
	let highest = 0;
	let counter = 0;

	for (let index in array) {
		if (array[index] > highest) {
			highest = array[index];
			counter = index;
		}
	}

	console.log(counter);
}

arrayIndexCounter(test);
