let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function findLongestName(array) {
    let longestName = array[0];

    for (let index in array) {
        if (array[index].length > longestName.length) {
            longestName = array[index];
        }
    }
    console.log(longestName);
}

findLongestName(test);