// Recursive
let factorial = (number) => {
  let result = number;
  while (number > 2) {
      result *= --number;
  }
  return(`The factorial of your number is ${result}`);
}

console.log(factorial(5));

// One line
factorial = (number) => {for(let i = number - 1; i >= 1; i -= 1) {number *= i;} return number}
console.log(factorial(6));