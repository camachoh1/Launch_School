let rlSync = require("readline-sync");

function calculate() {
  let firstNum = rlSync.question("==> Enter the first number:");
  let secNum = rlSync.question("==> Enter the second number:");

  console.log(`==> ${firstNum} + ${secNum} = ${parseInt(firstNum) + parseInt(secNum)}`);

  console.log(`==> ${firstNum} - ${secNum} = ${parseInt(firstNum) - parseInt(secNum)}`);

  console.log(`==> ${firstNum} * ${secNum} = ${parseInt(firstNum) * parseInt(secNum)}`);

  console.log(`==> ${firstNum} / ${secNum} = ${parseInt(firstNum) / parseInt(secNum)}`);

  console.log(`==> ${firstNum} % ${secNum} = ${parseInt(firstNum) % parseInt(secNum)}`);

  console.log(`==> ${firstNum} ** ${secNum} = ${Math.pow(firstNum, secNum)}`);
}

calculate();