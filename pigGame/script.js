const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const diseImg = document.querySelector('.dice');
const diseBtn = document.querySelector('.btn--roll');
const changeCol0 = document.querySelector('.player--0 ');
const changeCol1 = document.querySelector('.player--1 ');
const holdButton = document.querySelector('.btn--hold');

let score = [0, 0];
player1Score.textContent = 0;
player2Score.textContent = 0;
let calculateScore = 0;
let activePlayer = 0;
let playerWin = true;
//This active player 0 means player one 1 means Player Two

//SwitchPlayer Finction

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //This activePlayer its 0 means Its going to be a 1 and its will be stored activePlayer[Variable]
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log(` im the active player ${activePlayer}`);
  //Its which one was active Its doing going to be Deactive
  changeCol0.classList.toggle('player--active');
  changeCol1.classList.toggle('player--active');
};

diseBtn.addEventListener('click', function () {
  if (playerWin) {
    //Creating a Random Number With in 1 to 6
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    // Adding a DiseImg
    diseImg.classList.remove('hidden');
    diseImg.src = `dice-${randomNumber}.png`;
    // Dise !== 1 its going to add current value
    if (randomNumber !== 1) {
      calculateScore = Number(currentScore1.textContent) + randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        calculateScore;
    } else {
      switchPlayer();
    }
  }
});

holdButton.addEventListener('click', function () {
  if (playerWin) {
    // score ulla two player erukku
    score[activePlayer] += calculateScore;
    console.log(score);

    //THIS ONE WHICH PALYER(score--${activePlayer) AND WHICH PLAYER VALUE(score[activePlayer])
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //checking
    if (score[activePlayer] >= 20) {
      playerWin = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      //switching
      switchPlayer();
    }
  }
});
