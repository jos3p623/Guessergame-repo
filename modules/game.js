export default class GuessGame {
  constructor() {
    this.reset();
  }

  reset() {
    this.randomNum = Math.floor(Math.random() * 100) + 1;
    this.guessCount = 0;
    this.totalScore = 0;
    this.guesses = [];
    this.gameOver = false;
  }

  makeGuess(rawValue) {
    const value = rawValue.trim();

    if (value === '') {
      return { status: 'invalid', message: 'Please enter a valid number.' };
    }

    const trial = parseInt(value, 10);

    if (Number.isNaN(trial)) {
      return { status: 'invalid', message: 'Please enter a valid number.' };
    }

    this.guessCount += 1;
    this.guesses.push(trial);

    let response = { message: '' };

    if (trial === this.randomNum) {
      response = { status: 'correct', message: 'Your guess is correct!' };
      this.totalScore += 1;
      this.gameOver = true;
    } else if (trial < this.randomNum) {
      response = { status: 'low', message: 'your number is too low' };
      this.totalScore -= 1;
    } else {
      response = { status: 'high', message: 'your number is too high' };
      this.totalScore -= 1;
    }

    if (this.guessCount >= 10 && !this.gameOver) {
      response = { status: 'no-more', message: 'you have run out of chances' };
      this.gameOver = true;
    }

    return response;
  }

  getRemaining() {
    return Math.max(10 - this.guessCount, 0);
  }
}
