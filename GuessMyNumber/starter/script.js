let score = 20;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
// Here we will create Check button click function
document.querySelector('.check').addEventListener('click', function () {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  const guessValue = Number(document.querySelector('.guess').value);
  console.log(guessValue, secretNumber);
  //Task 3
  if (!guessValue) {
    return true;
    //Equal check up
  } else if (secretNumber === guessValue) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.message').textContent = 'Win the Match';
    document.querySelector('.highscore').textContent = guessValue;
    //Less than oR Grater than Check up
  } else if (secretNumber !== guessValue) {
    if (score > 1) {
      score--;
      displayMessage(guessValue > secretNumber ? 'Too high' : 'Too Low');
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost my bro');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = 0;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
