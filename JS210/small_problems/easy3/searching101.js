function suffix(num) {
  switch (num) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default:  return 'th';
  }
}

function search() {
  let input = require('readline-sync');
  let userInput = [];
  let counter = 1;

  while (counter <= 5) {
    let digit = parseInt(input.question(`Enter the ${counter + suffix(counter)} number: `));
    userInput.push(digit);
    counter += 1;
  }

  let lastDigit = parseInt(input.question('Enter the last number: '));

  if (userInput.includes(lastDigit)) {
    console.log(`The number ${lastDigit} is in [${userInput}]`);
  } else {
    console.log(`The number ${lastDigit} does not appear in [${userInput}]`);
  }
}




search();