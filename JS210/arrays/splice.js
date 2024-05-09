function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) {
      push(removedValues, array[index]);
    }
    array[index] = array[index + number];
  }

  array.length = array.length - removedValues.length;
  return removedValues
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]