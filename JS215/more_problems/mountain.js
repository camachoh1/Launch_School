// 
// 10:50am 11:30am

// problem: write a function that receives an array of numbers and considers if the mountain is scalable

// rules: 
  // inputs: array
  //output: boolean

  // a mountain is cosidered scalable if each number in the input array is within 5 units (could be 5 or less) of the next number in either direction.

  // [1, 4, 9]

// test cases:
  // isScalable([1, 4, 9]) // true
  // isScalable([1, 7, 3]) // false
  // isScalable([]) // false
  // isScalable([1]) // false
  // isScalable([1,,,]) // 
  // isScalable([1,2,4,,7]) // true
  //isScalable([1, 2, 4, 6, 7, 8]) // true
  //isScalable([40, 45, 50, 45, 47, 52]) // true
  //isScalable([2, 9, 11, 10, 18, 21]) // false

// data structures: array

// algorithm:
  // isValidArray 
    //input: a array
    // output: boolean

    // iterate though the array  add 1 to count if the index of the current element is > -1.
    // if count > 1 return true 
    // else return false 

// use helper function to check validity of the array.
// if array is not valid return false

// iterate through the input array 
  // checking the difference between current index and index + 1
  // if the difference is <= 5 continue iterating
  // return false

  function isScalable(arr) {
    if (!validArr(arr)) return false;
  
    let scalable = true;
    arr.forEach((n, index) => {
      if (arr[index + 1] - arr[index] > 5) {
        scalable = false;
      }
    });
    return scalable;
  }
  
  function validArr(arr) {
    let count = 0;
  
    for(let i = 0; i < arr.length; i += 1) {
      if (arr.indexOf(arr[i]) > -1) {
        count += 1;
      }
    }
  
    return count > 1 ?  true : false;
  }
  
  console.log(isScalable([1, 4, 9])) // true
  console.log(isScalable([1, 7, 3])) // false
  console.log(isScalable([])) // false
  console.log(isScalable([1])) // false
  console.log(isScalable([1,,,])) // 
  console.log(isScalable([1,2,4,,7])) // true
  console.log(isScalable([1, 2, 4, 6, 7, 8])) // true
  console.log(isScalable([40, 45, 50, 45, 47, 52])) // true
  console.log(isScalable([2, 9, 11, 10, 18, 21])) // false