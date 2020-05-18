let test = [2, 3, 2, 5, 8, 2, 3];

function checkRepeated(numbers) {
    let repeated = 0;
    let counter = 0;
    let repeatedIndex = 0;

    for (let index in numbers) {
        let numberChecker = numbers[index];

        for (let index2 in numbers) {
            if (numberChecker === numbers[index2]) {
                counter += 1;
            }
        }
        if (counter > repeated) {
            repeated = counter;
            repeatedIndex = index;
        }
    }
    console.log(repeatedIndex);
}

checkRepeated(test);