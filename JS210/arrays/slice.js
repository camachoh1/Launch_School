function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

function slice(arr, start, end) {
  let resultArr = [];

  for(let index = start; index < end; index += 1) {
    push(resultArr, arr[index]);
  }

  return resultArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]