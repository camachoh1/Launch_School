// using leadingSubstrings

function leadingSubstrings(str) {
  let substr = str.split('').map((_, index) => {
    return str.slice(0, index + 1);
  });

  return substr;
}

// using a single for loop and leadingsubstrings:

// function substrings(str) {
//   let result = [];
//   for (let i1 = 0; i1 < str.length; i1 += 1 ) {
//     result.push(leadingSubstrings(str.slice(i)));
//   }

//   return result.flat();
// }

// using flatMap and leadingSubstrings: 
function substrings(str) {
  let charArr = str.split('');
  return charArr.flatMap((_, idx) => {
    return leadingSubstrings(charArr.slice(idx).join(''));
  });
}

// // using two for loops:

// function substrings(str) {
//   let result = [];
//   for (let i1 = 0; i1 < str.length; i1 += 1 ) {
//     for (let i2 = 1; i2 <= str.length; i2 += 1) {
//       if (str.slice(i1, i2) === '') {
//         continue;
//       }
//       result.push(str.slice(i1, i2));
//     }
//   }

//   return result;
// }


console.log(substrings('abcde'));