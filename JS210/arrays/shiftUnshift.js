// function shift(arr) {
//   return arr.splice(0,1)[0];
// }

// function shift(arr) {
//   let first = arr[0];

//   if (arr.length === 0) {
//     return undefined;
//   }

//   for (let index = 0; index < arr.length - 1; index += 1) {
//     arr[index] = arr[index + 1];
//   }

//   arr.length = arr.length - 1;
//   return first;
// }

// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]


function unshift(arr, ...elements) {
  for (let i = 0; i < elements.length; i += 1) {
    arr.splice(i, 0, elements[i]);
  }

  return arr.length;
}

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3