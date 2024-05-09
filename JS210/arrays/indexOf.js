function indexOf(arr, val) {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === val) {
      return index;
    }
  }
  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1