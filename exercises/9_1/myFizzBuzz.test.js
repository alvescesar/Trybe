const myFizzBuzz = require('./myFizzBuzz');

test('find the Fizz or Buzz', () => {
  expect(myFizzBuzz(45)).toMatch('fizzbuzz');
  expect(myFizzBuzz(33)).toMatch('fizz');
  expect(myFizzBuzz(55)).toMatch('buzz');
  expect(myFizzBuzz(29)).toBe(29);
  expect(myFizzBuzz('Pindamonhangaba')).toBeFalsy();
});