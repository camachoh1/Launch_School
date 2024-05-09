const PASSWORD = 'password';

function passwordGuess() {
  let rlSync = require('readline-sync');
  let attempts = 0;

  while (attempts < 3) {
    let input = rlSync.question('Please enter your password: ');

    if (input === PASSWORD) {
      console.log('You have successfully logged in');
      break
    } else {
      attempts += 1
    }
  }
  console.log("You have been denied access");
}

passwordGuess();