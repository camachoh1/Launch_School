// problem: 
// a boomerang is a V-shaped sequence that is either upright or upside down. For the purposes of this problem, a boomeran is a sub array of length 3 with the first and last digits being the same and the middle being different.

// example: [3,1,3] boomerang facing down [1,3,1] boomerang facing up.

// write a function that receives an array of numbers and returns a number representing the number of boomerangs present in the input array. 

// rules: 
// boomerangs can overlap
// boomerangs can occur at any point in the input array

// test cases: 
  // countBoomerangs([1,2,3,4,5,6,7,8,9]) // 0
  // countBoomerangs([1,1,1,2,2,2,3,3,3,4,4,4]) // 0
  // countBoomerangs([1,2,3]) // 0
  // countBoomerangs([]) // 0

  // countBoomerangs([1,2,1,3,4,3,5,6,7,1]) // 2
  // countBoomerangs([1,2,3,2,3,4,5,6]) // 1
  // countBoomerangs([1,2,3,2,1]) // 1
  // countBoomerangs([2,3,2]) // 1
  // countBoomerangs([1, 7, 1, 7, 1, 7, 1]) // 5

// data structures: arrays 

// algorithm:
// GOALS: slice the input array into multiple sub arrays length of 3.
// in order to slice the array use the current index for each object in the array as initial value, use index + 2 as end value until end index is the size of the array
// create a function that identifies boomerangs by checking wether the first an last elements are the same and the middle element is not.
// create a counter that increments by one every time it encounters a boomeran array.

// helper function: isBoomerang
// input an array
// output: a boolean

// INITIALIZE midpoint = arr LEN / 2
// INITIALIZE first = arr[0]
// initialize last = arr[arr LEN - 1]

// IF (first === last) AND (midpoint != first AND midpoint != last)
  // RETURN true
// END IF

// helper function: sliceArr
// input: an array
// output: a 2D array

// IF array === []
  // RETURN 0
// END IF

// CREATE a results array

// ITERATE through the array from 0 to arr LEN
  // INITIALIZE end = i + 2
  // SLICE array(start = i, end)
  // PUSH slice into result
// END ITERATION

// FILTER RESULT
  // IF subArr LEN === 3
    // RETURN subArr
  // END IF
// RETURN filteredResult

// main function: countBoomerangs
// input an array of numbers
// output: a number

// IF arr LEN === 3
  // IF isBoomerang(arr)
    // RETURN 1
  // ELSE 
    // RETURN 0
  // END IF
// ELSE
  // INITIALIZE count
    // SLICE array (helper function)
      // ITERATE through sliced array
    // IF isBoomerang(subArr)
      // count += 1
    // END IF
// END ITERATION
// END IF

// RETURN COUNT

function countBoomerangs(arr) {
  if (arr.length === 0) return 0;

  let counter = 0;

  if (arr.length === 3) {
    return isBoomerang(arr) ? 1 : 0;
  } else {
    let slicedArr = sliceArr(arr);
    slicedArr.forEach(subArr => {
      if (isBoomerang(subArr)) {
        counter += 1;
      }
    });
  }

  return counter;
}

function sliceArr(arr) {
  let result = [];

  for (let start = 0; start < arr.length; start += 1) {
    let end  = start + 3;
    result.push(arr.slice(start, end));
  }

  return result.filter(subArr => subArr.length === 3);
}

function isBoomerang(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];
  let midpoint = arr[Math.floor(arr.length / 2)];

  return (first === last) && (midpoint !== first && midpoint !== last);
}

console.log(countBoomerangs([1,2,3,4,5,6,7,8,9])); // 0
console.log(countBoomerangs([1,1,1,2,2,2,3,3,3,4,4,4])); // 0
console.log(countBoomerangs([1,2,3])); // 0
console.log(countBoomerangs([])); // 0

console.log(countBoomerangs([1,2,1,3,4,3,5,6,7,1])); // 2
console.log(countBoomerangs([1,2,3,2,3,4,5,6])); // 2
console.log(countBoomerangs([1,2,3,2,1])); // 1
console.log(countBoomerangs([2,3,2])); // 1
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1])); // 5
