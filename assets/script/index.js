"use strict";
const body = document.querySelector("body");
const message = document.querySelector(".message");
const guessNum = document.querySelector(".check");
const displayNum = document.querySelector(".number");
const displayScore = document.querySelector(".score");
const displayHighscore = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

guessNum.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    message.textContent = "⛔️ No number!";

    // When player wins
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Correct Number!";
    displayNum.textContent = secretNumber;

    body.style.backgroundColor = "#60b347";
    displayNum.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      displayHighscore.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent =
        guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      score--;
      displayScore.textContent = score;
    } else {
      message.textContent = "💥 You lost the game!";
      displayScore.textContent = 0;
    }
  }
});

// Play again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
