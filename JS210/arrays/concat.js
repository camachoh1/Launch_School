function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

function concat(arr1, arr2) {
  let resultArr = [];

  for(index = 0; index < arr1.length; index += 1) {
    push(resultArr, arr1[index]);
  }

  for(index = 0; index < arr2.length; index += 1) {
    push(resultArr, arr2[index]);
  }

  return resultArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]