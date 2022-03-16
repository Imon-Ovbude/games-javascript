const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(choice => {
  choice.addEventListener('click', e => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
  });
});

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = 'rock';
  }

  if (randomNumber === 2) {
    computerChoice = 'paper';
  }

  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }

  computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () => {
  if (computerChoice === userChoice) {
    result = `it's a draw!`;
  }

  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'computer has won!';
  }

  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'You win!';
  }

  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'computer has won!';
  }

  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'you win!';
  }

  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'computer has won!';
  }

  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'You win!';
  }

  resultDisplay.innerHTML = result;
};
