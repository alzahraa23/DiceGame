let score1El = document.getElementById("score0");
let score2El = document.getElementById("score1");
let current1El = document.getElementById("current0");
let current2El = document.getElementById("current1");
let player1El = document.querySelector(".player--0");
let player2El = document.querySelector(".player--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".new");
let btnRoll = document.querySelector(".roll");
let btnHold = document.querySelector(".hold");
let currrentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let timerInterval;
let timeLeft = 10 * 60;

diceEl.classList.add("hidden");

//Set Timer
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(function () {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      document.getElementById("minutes").textContent =
        minutes < 10 ? "0" + minutes : minutes;
      document.getElementById("seconds").textContent =
        seconds < 10 ? "0" + seconds : seconds;
      if (timeLeft > 0) {
        timeLeft--;
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        btnRoll.disabled = true;
        btnHold.disabled = true;
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        compareScore();
      }
    }, 1000);
  }
}
//switch player
function switchPlayer() {
  document.getElementById(`current${activePlayer}`).textContent = 0;
  currrentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle("player--active");
  player2El.classList.toggle("player--active");
}

//compare result score
function compareScore() {
  let activeScore = scores[activePlayer];
  let otherPlayer = activePlayer === 0 ? 1 : 0;
  let otherScore = scores[otherPlayer];
  let resultText = "";

  if (activeScore > otherScore) {
    resultText = `Player ${
      activePlayer + 1
    } wins with ${activeScore} points! 🎉`;
  } else if (activeScore < otherScore) {
    resultText = ` Player ${
      otherPlayer + 1
    } wins with ${otherScore} points! 🎉`;
  } else {
    resultText = `It's a tie! Both players have ${activeScore} points.`;
  }
  document.getElementById("result").textContent = resultText;
}

//button  Roll Dice
btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.jpg`;
  startTimer();
  if (dice !== 1) {
    currrentScore += dice;
    document.getElementById(`current${activePlayer}`).textContent =
      currrentScore;
  } else {
    switchPlayer();
  }
});

//button  Hold
btnHold.addEventListener("click", function () {
  scores[activePlayer] += currrentScore;
  document.getElementById(`score${activePlayer}`).textContent =
    scores[activePlayer];
  switchPlayer();
});

//button New Game
btnNew.addEventListener("click", function () {
  score1El.textContent = 0;
  score2El.textContent = 0;
  current1El.textContent = 0;
  current2El.textContent = 0;
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timeLeft = 10 * 60;
  diceEl.classList.add("hidden");
  document.getElementById("result").textContent = "";
  document.getElementById("minutes").textContent = "10";
  document.getElementById("seconds").textContent = "00";
  btnRoll.disabled = false;
  btnHold.disabled = false;
});
