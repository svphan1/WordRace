window.addEventListener("load", init);

// Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

// Change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const highScoreDisplay = document.querySelector("#high-score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "hats",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition"
];

// Initialize game
function init() {
  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

//Start game
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Nice!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//Pick & show random word
function showWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is does not run out
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!";
    score = -1;
  }
}
