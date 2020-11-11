// const readline = require('readline-sync');
const inquire = require('inquirer');

async function calculateBMI() {
  const data = await inquire.prompt([
    { name: 'weight', type: 'number', message: 'How much do you weight?' },
    { name: 'height', type: 'number', message: 'How tall are you?' },
  ]);

  const weight = data.weight;
  const height = data.height;

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

calculateBMI();
