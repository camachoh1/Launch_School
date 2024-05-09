let arr = [1,2,3,4,5];

function lastInArray(arr) {
  return arr[arr.length - 1];
}

// using a function expression with an arrow function:

let lastInArray = arr => arr[arr.length - 1];

console.log(lastInArray(arr));

