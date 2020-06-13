function factorial(number){
  if (number == 0) {
      return 1;
  }
  let result = number;
  while (number > 2) {
      result *= --number;
  }
  console.log(`The factorial of this number is ${result}`);
}

factorial(10);