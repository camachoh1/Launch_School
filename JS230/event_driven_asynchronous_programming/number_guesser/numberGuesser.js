document.addEventListener('DOMContentLoaded', () => {
  let answer = getRandomNum()
  let form = document.querySelector('form');
  let input = form.querySelector("input[type='text']");
  let link = document.querySelector('a');
  let p = document.querySelector('p');

  function getRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    let userGuess = Number.parseInt(input.value, 10);
    
    let message;

    if (userGuess > answer) {
      message = `The answer is lower than ${userGuess} bud! `
    } else if (userGuess < answer) {
      message = `The answer is higher than ${userGuess} compae`
    } else {
      message = "That's it! You got it!"
    }

    p.textContent = message;
  });


  link.addEventListener('click', event => {
    event.preventDefault();
    answer = getRandomNum();

    message = "Guess a number careverga!";
    p.textContent = message;
  });

  
});