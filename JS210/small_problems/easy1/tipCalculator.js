
let input = require('readline-sync');

function tipCalculator() {
  let bill = parseFloat(input.question('What is the bill? '), 10);
  let percentage = parseFloat(input.question('What is the tip percentage? '), 10);

  let tip = bill * (percentage / 100);

  console.log(`the tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${(bill + tip).toFixed(2)}`);
}

tipCalculator();