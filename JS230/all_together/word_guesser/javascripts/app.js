class guessAWord {
  constructor(words) {
    this.words = words;
    this.currentWord;
    this.incorrectGuesses = 0;
    this.correctGuesses = 0;
    this.totalGuesses = 6;
    this.guessedLetters = [];
    this.spaces = document.querySelector('#spaces');
    this.boundGameplay = this.gameplay.bind(this);
  }

  randomWord() {
    if (this.words.length === 0) {
      return undefined;
    }

    const randomIdx = Math.floor(Math.random() * this.words.length);
    const word = this.words[randomIdx];
    this.words.splice(randomIdx, 1);
    return word;
  }

  pickaWord() {
    let word = this.randomWord();

    if (word) {
      return word;
    } else {
      return undefined;
    }
  }

  displayMessage(message) {
    let p = document.querySelector('#message');
    p.textContent = message;
  }

  displayGuess(guess) {
    if (!this.guessedLetters.includes(guess)){
      console.log(guess)
    }
    const guesses = document.querySelector('#guesses');
    const span = document.createElement('span');
    span.textContent = guess.toUpperCase();
    guesses.appendChild(span);
  }

  createSpaces() {
    const wordChars = this.currentWord.split('');
    wordChars.forEach(_char => {
      let span = document.createElement('span');
      this.spaces.appendChild(span);
    });
  }
  
  validKey(key) {
    let validKeys = new RegExp(/[a-z]/);
    return key.length === 1 && validKeys.test(key)
  }

  displayCorrectGuess(guess, idx) {
    let spans = [...this.spaces.querySelectorAll('span')];
    idx.forEach(idx => spans[idx].textContent = guess);
    
  }

  incorrectGuess() {
    this.incorrectGuesses += 1;
    
    let guessNumber = `guess_${this.incorrectGuesses}`;
    let apples = document.querySelector('#apples');
    
    for (let i = 1; i <= this.totalGuesses; i += 1) {
      apples.classList.remove(`guess_${i}`);
    }
    
    apples.classList.add(guessNumber);
  }

  correctGuess(guess) {
    let currentWordChars = this.currentWord.split('');
    let result = [];
    currentWordChars.forEach((char, index) => {
      if (char === guess) {
        result.push(index);
      }
    });
    return result
  }
  matchGuess(guess) {
    let validGuessIdx = this.correctGuess(guess);

    if (validGuessIdx.length > 0) {
      this.correctGuesses += validGuessIdx.length
      this.displayCorrectGuess(guess, validGuessIdx);
      this.displayGuess(guess);
    } else {
      this.incorrectGuess(guess);
      this.displayGuess(guess);
    }
  }

  gameplay(event) {
    let key = event.key;

    if (this.validKey(key)) {
      if (!this.guessedLetters.includes(key)) {
        this.guessedLetters.push(key);
        this.matchGuess(key)
      }
    }

    if (this.incorrectGuesses === this.totalGuesses) {
      this.gameOver();
      this.replay();
    } else if (this.correctGuesses === this.currentWord.length) {
      this.winGame();
      this.replay();
    }
  }

  gameOver() {
    this.displayMessage('Game Over!');
    this.unbindEvent(this.boundGameplay);
  }

  winGame() {
    this.displayMessage('You Win!')
    this.unbindEvent(this.boundGameplay);
  }

  removeGuesses() {
    let guesses = document.querySelectorAll('#guesses span');
    guesses.forEach(guess => {
      if (guess.tagName === 'SPAN') {
        guess.remove();
      }
    });
  }

  removeSpaces() {
    let spaces = document.querySelectorAll('#spaces span');
    spaces.forEach(space => {
      space.remove();
    });
  }

  toggleReplayLink(element) {
    if (!element.classList.contains('visible')) {
      element.classList.toggle('visible', true);
    } 
  }

  restart(e) {
    e.preventDefault();
    let apples = document.querySelector('#apples');
    let replayLink = document.querySelector('#replay');
    apples.removeAttribute('class');
    this.removeGuesses();
    this.removeSpaces();
    this.displayMessage('');
    replayLink.classList.remove('visible');

    this.correctGuesses = 0;
    this.incorrectGuesses = 0;
    this.guessedLetters = [];
    this.newGame();
  }

  replay() {
    const replayLink = document.querySelector('#replay');
    this.toggleReplayLink(replayLink);
    
    if (!this.hasClickListener) {
      replayLink.addEventListener('click', this.restart.bind(this));
      this.hasClickListener = true;
    }
    
  }

  unbindEvent(callback) {
    document.removeEventListener('keydown', callback);
  }

  bindEvent(callback) {
    document.addEventListener('keydown', callback);
  }

  newGame() {
    let word = this.pickaWord();
    if (word) {
      this.currentWord = word;
    } else {
      this.displayMessage("Sorry, I've ran out of words!");
      return this;
    }
    this.createSpaces();
    this.bindEvent(this.boundGameplay);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let game = new guessAWord(['banana', 'apple', 'orange', 'pear']);
  game.newGame();
});