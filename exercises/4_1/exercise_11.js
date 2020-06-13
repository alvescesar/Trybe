let salary = 10000;

function getLiquidSalary() {
  let baseSalary = salary;
  if (salary <= 1556.94) {
    baseSalary = salary * (.92);
  } else if (salary > 1556.94 && salary <= 2594.92) {
    baseSalary = salary * (.91);
  } else if (salary > 2594.92 && salary <= 5189.82) {
    baseSalary = salary * (.89);
  } else if (salary > 5189.82) {
    baseSalary = salary - 570.88;
  }
  
  let liquidSalary = baseSalary;
  if (baseSalary > 1903.98 && baseSalary <= 2826.65) {
    liquidSalary = baseSalary * (.925) - 142.80;
  } else if (baseSalary > 2826.65 && baseSalary <= 3751.05) {
    liquidSalary = baseSalary * (.85) - 354.80;
  } else if (baseSalary > 3751.05 && baseSalary <= 4664.68) {
    liquidSalary = baseSalary * (.775) - 636.13;
  } else if (baseSalary > 4664.68) {
    liquidSalary = baseSalary * (.725) - 896.36;
  }

  console.log(liquidSalary.toFixed(2));
}

getLiquidSalary();
