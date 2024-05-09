function multiply(num1, num2) {
  let rlSync = require("readline-sync");
  
  firstNum = Number(rlSync.question("Enter the first number: "));
  
  secondNum = Number(rlSync.question("Enter the second number'"));

  let result = firstNum * secondNum;

  return console.log(`${firstNum} * ${secondNum} = ${result}`);
}

multiply();


function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);