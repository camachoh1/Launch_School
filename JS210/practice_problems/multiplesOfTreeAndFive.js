// function multiplesOfTreeAndFive() {
//   for (let currentNumber = 1; currentNumber <= 100; currentNumber += 1) {
//     if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
//       console.log(`${String(currentNumber)}!`);
//     } else if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
//       console.log(`${String(currentNumber)}`);
//     }
//   }
// }

// multiplesOfTreeAndFive();

// further exploration

function multiplesOfTreeAndFive(initialNum, endNum) {
  
  for (let currentNumber = initialNum; currentNumber <= endNum; currentNumber += 1) {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      console.log(`${String(currentNumber)}!`);
    } else if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
      console.log(`${String(currentNumber)}`);
    }
  }
}

multiplesOfTreeAndFive(1, 15);
