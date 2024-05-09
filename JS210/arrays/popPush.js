// function pop(arr) {
//   let removedVal = 0;
//   if (arr.length === 0) {
//     return undefined;
//   }

//   removedVal = arr[arr.length - 1];
//   arr.length = (arr.length - 1);
//   return removedVal;
// }

// const array1 = [1, 2, 3];
// console.log(pop(array1));                        // 3
// console.log(array1);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));


function push(arr, ...elements) {
  if (elements === undefined) {
    return arr.length;
  }

  for (let index = 0; index < elements.length; index += 1) {
      arr[arr.length] = elements[index]
  }

  return arr.length
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6)); 
console.log(array2);  
console.log(push([1, 2], ['a', 'b']));
console.log(push([], 1));                       // 1
console.log(push([])); 