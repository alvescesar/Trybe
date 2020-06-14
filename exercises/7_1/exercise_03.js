const button = document.getElementById('click-me');
const counter = document.getElementById('counter');
let clicks = 0;
let clickCount = () => {
  clicks += 1;
  counter.innerHTML = clicks;
};

button.addEventListener('click', clickCount);