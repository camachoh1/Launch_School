// problem: 
// write a function that returns tru if you can partition the array into one element and the rest. This element is equals to the product of of the other elements excluding itself

// rules: 
  // the array may duplicate values
  // the input array may contain negative values 

// input: an array of numbers
// output: a boolean

// data structures: array 

// algorithm:
// return false if the input array <= 2;

  // using nested iteration:
    // i = 0 > length of the array
    //candidate = array[i]
  
    // initialize accumulator;

    // nested loop (for) i = 0

    // compare candidate vs current number = array[i]

    // if the current number != the candidate && !accumulator
    //accumulator = current number
    
    // if current number != candidate && accumulator
      // accumulator *= current number
    // 

  // if accumulator is the same as the candidate return true
  
  // return false


// [2,8,4,1]

// candidate = [8]

// accumulator;

// // nested iteration
// [2,8,4,1]

// current number = 1

// candidate != current number && !accumulator
// accumulator = current number
// candidate != current number && accumulator
// accumulato *= current number 
// // end of nested iteration 

// candidate === accumulator return true 

function canPartition(arr) {
  if (arr.length <= 2) return false;
  
  for (let i = 0; i < arr.length; i += 1) {
    let accumulator;
    let candidate = arr[i]
    for (let currentNum = 0; currentNum < arr.length; currentNum += 1) {
  
      if (currentNum !== candidate && !accumulator) {
        accumulator = currentNum;
      } else if (currentNum !== candidate && accumulator) {
        accumulator *= currentNum;
      }
    }
    if (candidate === accumulator) {
      return true;
    }

    console.log(candidate, accumulator);
  }
  return false;
}

// console.log(canPartition([])); // false
// console.log(canPartition([1])); // false
// console.log(canPartition([1,2])); // false

console.log(canPartition([2,8,4,1])); // true
// console.log(canPartition([-1, -10, 1, -2, 20])); // false
// console.log(canPartition([-1, -20, 5, -1, -2, 2])); // true


