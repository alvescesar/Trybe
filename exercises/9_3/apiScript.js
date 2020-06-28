const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const joke = document.getElementById('jokeContainer');
    joke.innerHTML = data.joke;
  });
};

/*----------Next Exercise---------- */

function randomNumbers() {
  return new Promise((resolve, reject) => {
  const numbersArray = [];
  
  for(let i = 0; i < 10; i += 1) {
    numbersArray.push(Math.floor(Math.random() * 50) ** 2);
  }
  const arraySum = numbersArray.reduce((acc, result) => acc + result);

  (arraySum < 8000) ? resolve(divideAll(arraySum)) : reject('É mais de oito mil! Essa promise deve estar quebrada!');
  });
}

function divideAll(sum) {
  return new Promise((resolve, reject) => {
    const arrayDivide = [2, 3, 5, 10];
    const division = arrayDivide.map(numbers => sum / numbers);

    (division) ? resolve(division) : reject('No deal');
  });
}

function sumAll(result) {
  return new Promise((resolve, reject) => {
    const sumResult = result.reduce((acc, number) => acc + number);

    (sumResult) ? resolve(console.log(sum)) : reject('No deal');
  });
}
