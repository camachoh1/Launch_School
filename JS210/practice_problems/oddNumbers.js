// function logOddNumbers(num) {
//   if (num > 0) {
//     for (let i = 0; i <= num; i++) {
//       if (i % 2 !== 0) {
//         console.log(i);
//       }
//     }
//   } else {
//     console.log(`${num} is not a valid number`);
//   }
// }

// logOddNumbers(0);

// further exploration

// function logOddNumbers(num) {
//   for (i = 1; i <= num; i += 2) {
//     console.log(i);
//   }
// }

// logOddNumbers(19);

function logOddNumbers(num) {
  for (i = 1; i <= num; i += 1) {
    if (i % 2 === 0) {
      continue;
    }

    console.log(i)
  }
}

logOddNumbers(19)