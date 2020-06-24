const sum = require('./sum');

test('sum of all numbers', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
  expect(sum).toThrow('parameters must be numbers');
});