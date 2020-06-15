const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
let test = [1, 2, 3, 4];

assert.deepEqual(myRemoveWithoutCopy(test, 3), [1, 2, 4], 'Tudo em ordem');
assert.notDeepEqual(myRemoveWithoutCopy(test, 3), [1, 2, 3, 4], 'Certo');
assert.deepEqual(myRemoveWithoutCopy(test, 5), test, 'Sem alterações');

console.log(myRemoveWithoutCopy(test, 1));
