import GuessGame from './game.js';
import GuessUI from './ui.js';

const elements = {
  input: document.getElementById('userGuess'),
  form: document.getElementById('guessForm'),
  remaining: document.getElementById('remainingguesses'),
  resetBtn: document.getElementById('resetButton'),
  guessCount: document.getElementById('guessCount'),
  score: document.getElementById('totalscore'),
};

const game = new GuessGame(1, 100, 10);
const ui = new GuessUI(game, elements);

ui.init();

