const myIndexOf = require('./myIndexOf');

test('get array index', () => {
  expect(myIndexOf([1, 2, 3, 4], 3)).toEqual(2);
  expect(myIndexOf([1, 2, 3, 4], 5)).toEqual(-1);
});