// function logMultiples(num) {
//   if (num >= 0 && num <= 100) {
//     for (let max = 100; max >= 0; max -= 1) {
//       if (max % num === 0 && max % 2 === 1) {
//         console.log(max);
//       }
//     }
//   }
// }

// logMultiples(21);

// further exploration 

// function logMultiples(num) {
//   let largestMultiple = Math.floor(100 / num) * num;

//   for (largestMultiple; largestMultiple > 0; largestMultiple -= num) {
//     if (largestMultiple % num === 0 && largestMultiple % 2 === 1) {
//       console.log(largestMultiple);
//     }
//   }
// }

// logMultiples(21);


function logMultiples(num) {
  let largestMultiple = Math.floor(100 / num) * num;

  while (largestMultiple > 0) {
    if (largestMultiple % num === 0 && largestMultiple % 2 === 1) {
      console.log(largestMultiple);
    }

    largestMultiple -= num
  }
}

logMultiples(21);