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

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const numbersArray = [];
    
    for(let i = 0; i < 10; i += 1) {
      numbersArray.push(Math.floor(Math.random() * 50) ** 2);
    }

    const arraySum = numbersArray.reduce((acc, result) => acc + result);

    (arraySum < 8000) ? resolve(arraySum) : reject();
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then(array => array.reduce((number, acc) => number + acc, 0))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};

fetchPromise();