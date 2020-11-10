const readline = require('readline-sync');

function findIMC() {
  const weight = readline.questionFloat('How much do you weight? ').toFixed(2);
  const height = readline.questionFloat('How tall are you? ').toFixed(2);

  console.log('Weight: %s, Height: %s', weight, height);

  const imc = (weight / Math.pow(height, 2)).toFixed(2);

  console.log('IMC: %s', imc);
}

findIMC();
