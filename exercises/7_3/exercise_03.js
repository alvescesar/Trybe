const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
assert.equal(10, mySum([1, 2, 3, 4]));
assert.equal(0, mySum([1, -2, -3, 4]));