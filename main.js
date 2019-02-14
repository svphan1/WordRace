window.addEventListener('load', init);

let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const highScoreDisplay = document.querySelector('#high-score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hats',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// Initialize game
function init() {
  showWord(words);
  setInterval(countdown, 1000); 
  setInterval(checkStatus, 50);
}

//Pick & show random word
function showWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex]
}

// Countdown timer  
function countdown() {
  // Make sure time is does not run out
  if(time > 0) {
    time--;
  } else if(time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
  if(!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!';
  }
}
