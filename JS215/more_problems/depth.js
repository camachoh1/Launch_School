//Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.

// input: array
// output: a number representing the depth of the array 0 if no argument is given

// rules: 

// calculateDepth() // 0
// calculateDepth({}) // 0
// calculateDepth([]); // 1
// calculateDepth([[]]) // 2
// calculateDepth([[], [[]]]); // 3
// calculateDepth([[], [[]],[[[]]]]); // 4
// calculateDepth([{}]) // 2
// calculateDepth([{[{}]}]) // 4

// DS: arrays, objects, numbers

// helper function: countDepth

// input: array
// output: a number

// INITIALIZE counter = 1
// DO 
  // INITIALIZE destructured = [...arr]
  // IF destructured contains arrays or object
    // destructured = [...destructured]
    // counter += 1
  // END IF
// WHILE destructured has objects or arrays in it 
// return counter

// algorithm: 
// GOALS: use object/array destructuring until the resulting array does not contain any arrays or objects. 

// main function: calculateDepth

// IF arr !== Array 
  // RETURN 0
// END IF


// IF arr === [] || EVERY element in the array is not array or object 
  // RETURN 1
// 

// CREATE countArr = []
// iterate through the input array transform
// PUSH into countArr countDepth if the current element is an array or object
// END ITERATION

// RETURN max value in depthCountArr

// function calculateDepth(arr) {
//   if (!Array.isArray(arr)) return 0;

//   if (arr.every(el => !Array.isArray(el) && typeof el !== "object")) {
//     return 1;
//   } 

//   let countArr = [];

//   arr.forEach(el => {
//     if (Array.isArray(el) || typeof el === "object") {
//       countArr.push(countDepth(el));
//     }
//   });

//   return countArr;
// }


// function countDepth(arr) {
//   if (arr.length === 0 ) return 1;
  
//   let counter = 0;
//   let destructured = [...arr];

//   while (destructured.some(el => Array.isArray(el) || typeof el === "object")) {
//     let newDestructured = [];
//     for (let el of destructured) {
//       if (Array.isArray(el)) {
//         newDestructured.push(...el);
//       } else if (typeof el === "object") {
//         newDestructured.push(...Object.values(el));
//       } else {
//         newDestructured.push(el);
//       }
//     }
//     destructured = newDestructured;
//     counter += 1;
//   }

//   return counter;
// }


function calculateDepth(item) {
  if (!Array.isArray(item) && typeof item !== 'object' || item === null) {
    return 0;
  }

  let maxDepth = 0;

  // If it's an array, loop through its elements
  if (Array.isArray(item)) {
    for (let element of item) {
      maxDepth = Math.max(maxDepth, calculateDepth(element));
    }
  }

  // If it's an object, loop through its values
  else {
    for (let key in item) {
      maxDepth = Math.max(maxDepth, calculateDepth(item[key]));
    }
  }

  return maxDepth + 1;
}

// Test cases
console.log(calculateDepth([{}]));           // ➞ 2
console.log(calculateDepth([{ a: [{}] }]));  // ➞ 4


// console.log(calculateDepth()); // 0
// console.log(calculateDepth({})); // 0
// console.log(calculateDepth([]); // 0
console.log(calculateDepth([[]])); // 2
console.log(calculateDepth([[], [[]]])); // 3
console.log(calculateDepth([[], [[]],[[[]]]])); // 4
console.log(calculateDepth([{}])); // 2
console.log(calculateDepth([{ a: [{}] }])); // 4
console.log(calculateDepth([[null]]));

// let example = [];
// example.depth = [];
// console.log(calculateDepth(example) === 2);

// example = [[a, [b]]];
// calculateDepth(example);
// console.log(example); //[[a, [b]]]

// console.log([[], 5]) === 2);