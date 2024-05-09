function retirementCalculator() {
  let input = require('readline-sync');
  let currentAge = parseInt(input.question('what is your age? '));
  let retirementAge = parseInt(input.question('At wat age would you like to retire? '));
  let currentYear = 2023;
  let retirementYear = currentYear + retirementAge;
  let yearsLeft = retirementAge - currentAge;

  console.log(`it is ${currentYear}. You will retire in ${retirementYear}.`);
  console.log(`You have only ${yearsLeft} years of work to go!`);
}

retirementCalculator();