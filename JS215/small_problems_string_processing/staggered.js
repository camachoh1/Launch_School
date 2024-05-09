// function staggeredCase(str) {
//   let strArr = str.split('');

//   strArr.forEach((char, index) => {
//     if (index % 2 === 0) {
//       strArr[index] = char.toUpperCase();
//     } else { 
//       strArr[index] = char.toLowerCase();
//     }
//   });

//   return strArr.join('');
// }

function staggeredCase(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (i % 2 === 0) {
      str[i] = str[i].toUpperCase();
    } else {
      str[i] = str[i].toLowerCase();
    }
  }

  return str;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"