function multiplyStars(num) {
  result = '';
  let stars = num - 1
  while (stars > 0) {
    result += "*";
    stars -= 1;
  }
  return result
}

function generatePattern(nStars) {
  let first = '';
  let stars = nStars;

  for (i = 1; i <= nStars; i += 1) {
    first += i;
    console.log(first + multiplyStars(stars));
    stars -= 1;
  }
}
// Solution using Strin.prototype.repeat()

// function generatePattern(nStars) {
//   let first = '';
//   let stars = nStars;

//   for (i = 1; i <= nStars; i += 1) {
//     first += i;
//     console.log(first + '*'.repeat(stars - 1));
//     stars -= 1
//   }
// }

// ls solution

// function generatePattern(nStars) {
//   for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
//     let string = '';

//     for (let digit = 1; digit <= lineNumber; digit += 1) {
//       string += String(digit);
//     }

//     for (let count = lineNumber + 1; count <= nStars; count += 1) {
//       string += '*';
//     }

//     console.log(string);
//   }
// }

generatePattern(20);


// function generatePattern(nStars) {

// }