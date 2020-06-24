const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

test('return array minus item if it exists', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemoveWithoutCopy([2, 4, 6, 8, 10])).toEqual([2, 4, 6, 8, 10]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});