// let input = require('readline-sync');

// function sumOrProduct() {
//   let sum = 0;
//   let product = 1;

//   let num = parseInt(input.question('Please enter an integer greater than 0: '), 10);

//   let operation = input.question('Enter "s" to compute the sum, or "p" to compute the product: ');

//   if (operation === 's') {
//     for(let i = 0; i <= num; i += 1) {
//       sum += i;
//     }
//     console.log(`The sum of the integers between 1 and ${num} is ${sum}`);
//   } else if (operation === 'p') {

//     for(let i = 1; i <= num; i += 1) {
//       product *= i;
//     }
//     console.log(`The product of the integers between 1 and ${num} is ${product}`);
//   }
// }

// sumOrProduct();

function computeSum(number) {
  let total = 0;

  for (let i = 1; i <= number; i += 1) {
    total += i;
  }

  return total;
}

function computeProduct(number) {
  let total = 1;

  for (let i = 1; i <= number; i += 1) {
    total *= i;
  }

  return total;
}

const number = parseInt(prompt('Please enter an integer greater than 0'), 10);
const operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

if (operation === 's') {
  let sum = String(computeSum(number));
  console.log(`The sum of the integers between 1 and ${String(number)} is ${sum}.`);
} else if (operation === 'p') {
  let product = String(computeProduct(number));
  console.log(`The product of the integers between 1 and ${String(number)} is ${product}.`);
} else {
  console.log('Oops. Unknown operation.');
}