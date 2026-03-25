export default class GuessUI {
  constructor(game, elements) {
    this.game = game;
    this.elements = elements;
  }

  init() {
    this.updateStats();

    this.elements.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.onSubmit();
    });

    this.elements.resetBtn.addEventListener('click', () => this.onReset());
  }

  onSubmit() {
    const rawValue = this.elements.input.value;
    const result = this.game.makeGuess(rawValue);

    if (result.status === 'invalid') {
      alert(result.message);
      return;
    }

    alert(result.message);
    this.updateStats();

    if (result.status === 'correct' || result.status === 'no-more') {
      this.elements.input.disabled = true;
    }

    this.elements.input.value = '';
    this.elements.input.focus();
  }

  onReset() {
    this.game.reset();
    this.elements.input.disabled = false;
    this.elements.input.value = '';
    this.updateStats();
  }

  updateStats() {
    this.elements.score.textContent = this.game.totalScore;
    this.elements.guessCount.textContent = this.game.guessCount;
    this.elements.remaining.textContent = this.game.getRemaining();
  }
}
