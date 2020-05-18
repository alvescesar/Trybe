let test = [23, 67, 9, 1, 105, 98, 340, 32];

function arrayIndexCounter(array) {
	let lowest = array[0];
	let counter = 0;

	for (let index in array) {
		if (array[index] < lowest) {
			lowest = array[index];
			counter = index;
		}
	}

	console.log(counter);
}

arrayIndexCounter(test);
