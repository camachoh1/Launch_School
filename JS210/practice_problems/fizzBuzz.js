// function fuzzBuzz() {
//   for (let num = 1; num <= 100; num += 1) {
//     if (num % 3 === 0 && num % 5 === 0) {
//       console.log('fizzBuzz');
//     } else if (num % 3 === 0) {
//       console.log('Fizz');
//     } else if (num % 5 === 0) {
//       console.log("Buzz");
//     }
//     console.log(num);
//   }
// }

// fuzzBuzz();

// further exploration

let fizzbuzz = () => {
  for (let index = 1; index <= 100; index += 1) {
    let message = '';

    if (index % 3 === 0) {
      message += 'Fizz';
    }

    if (index % 5 === 0) {
      message += 'Buzz';
    }

    console.log(message || index);
  }
};

fizzbuzz();