// function makeMultipleLister(number) {
//   return function () {
//     for(let i = number; i < 100; i += 1) {
//       if (i % number === 0) {
//         console.log(i);
//       }
//     }
//   }
// }

// let lister = makeMultipleLister(13);
// lister();

let num = 0

function add(number) {
  num += number;
  console.log(num);
}

function substract(number) {
  num -= number;
  console.log(num);
}

add(1);
add(42);
substract(39);
add(6);