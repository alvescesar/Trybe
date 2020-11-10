const readline = require('readline-sync');

function findIMC() {
  const weight = readline.questionFloat('How much do you weight? ').toFixed(2);
  const height = readline.questionFloat('How tall are you? ').toFixed(2);

  console.log('Weight: %s, Height: %s', weight, height);

  const bmi = (weight / Math.pow(height, 2)).toFixed(2);

  console.log('BMI: %s', bmi);

  if (bmi < 18.5) {
    console.log('Underweight');
    return;
  }
  
  if (bmi >= 18.5 && bmi < 25) {
    console.log('Normal weight');
    return;
  }
  
  if (bmi >= 25 && bmi < 30) {
    console.log('Overweight');
    return;
  }
  
  if (bmi >= 30 && bmi < 35) {
    console.log('Obese');
    return;
  }
  
  if (bmi >= 35 && bmi < 40) {
    console.log('Severely obese');
    return;
  }
  
  console.log('Morbidly obese');

}

findIMC();
