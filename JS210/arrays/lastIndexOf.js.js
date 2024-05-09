function lastIndexOf(arr, val) {
  let resultIdx = 0;
  for(let index = 0; index < arr.length; index += 1) {
    if (arr[index] === val) {
      resultIdx = index;
    }
  }

  return resultIdx ? resultIdx : -1;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1