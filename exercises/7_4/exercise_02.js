const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = (array) => {
  let arrayWords = [];
  for (let i = 0; i < array.length; i += 1) {
    arrayWords.push(array[i].length);
  }
  return arrayWords;
};
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
