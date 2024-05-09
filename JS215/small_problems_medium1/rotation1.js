// problem:

// given an array, write a function that rotates the array by moving the first element to the end of the array. Do not modify the original array.

// return undefined if the input is not an array
// return an empty array if the input is an empty array

// input: an array
// output an array

// notice that the input array may contain any kind of element. 

// do not mutate the original array. 

// examples:

// [1,2,3] => [2,3,1]

// [[a], [b], [c]] => [[b], [c], [a]]

// [] => []

// "a" => undefined

// data structures: arrays

// algorithm

// check if the input is an array, if it is continue, else return undefined. 

// create a copy of the input array (either using slice or array deconstruction)

// create a temp variable

// assign the first value of the array to the temp by shifting it.

// append the value of the temp array into the copy array and return.

function rotateArray(arr){
  if (!Array.isArray(arr)) {return undefined};
  if (arr.length === 0) {return arr};

  let arrCopy = [...arr];

  arrCopy.push(arrCopy.shift());
  return arrCopy
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]