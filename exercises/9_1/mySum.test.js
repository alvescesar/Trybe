const mySum = require('./mySum');

test('sum of all array numbers', () => {
  expect(mySum([1, 2, 3, 4])).toBe(10);
  expect(mySum([1, -2, -3, 4])).toBe(0);
});