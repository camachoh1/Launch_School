function sortDescending(arr) {
  let arrCopy = arr.slice();
  return arrCopy.sort((a,b) => a - b);
}

let array = [3, 1, 4, 1, 5];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);    