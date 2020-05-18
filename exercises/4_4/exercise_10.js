let test = [2, 3, 2, 5, 8, 2, 3];

function checkRepeated(numbers) {
    let repeated = numbers[0];
    let counter = 0;

    for (let index in numbers) {
        if (numbers[index] === repeated) {
            repeated = numbers[index];
            counter = index;
        }
    }

    console.log(counter);
}

checkRepeated(test);