// function runningTotal(arr) {
//   let resultArr = [];
//   let sum = 0;

//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//     resultArr.push(sum);
//   }

//   return resultArr;
// }

// using map

function runningTotal(arr) {
  let sum = 0;

  return arr.map((n) => sum += n)
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []