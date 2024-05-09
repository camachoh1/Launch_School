function nthElementOf(arr, index) {
  // if (index > arr.length || index < 0) {
  //   return -1;
  // }

  return arr[index];
}

let digits = [4, 8, 15, 16, 23, 42];

digits[-1] = 10;
digits[-1] = 42;
digits[-1];
digits['-1'];

console.log(digits);


// console.log(nthElementOf(digits, 3));   // returns 16
// console.log(nthElementOf(digits, 8));   // what does this return?
// console.log(nthElementOf(digits, -1));  // what does this return?