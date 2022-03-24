const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const button = document.querySelector('#button');

let result = 0;
let hitPosition;
let currentTime = 5;
let timerId = null;
let countDownTimerId;

timeLeft.textContent = currentTime;

const randomSquare = () => {
  squares.forEach(square => {
    square.classList.remove('mole');
  });

  let randomSquarePosition = squares[Math.floor(Math.random() * 9)];

  randomSquarePosition.classList.add('mole');
  hitPosition = randomSquarePosition.id;
};

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

const moveMole = () => {
  timerId = setInterval(randomSquare, 1000);
  countDownTimerId = setInterval(countDown, 1000);
};

const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert(`time over, your final score is ${result}`);
  }
};

button.addEventListener('click', moveMole);
// button.addEventListener('click', countDown);

// console.log(button);

// moveMole();
