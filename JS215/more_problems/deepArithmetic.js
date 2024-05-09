// problem:

// write a fucntion that receives an array of strings. The array could have any dimensionality ([], [[]], [[[]]]). Each string in the array will contain numbers. The function will provide the sum of all the numbers and return the result as a number.

// rules: 
  // numbers in strings can be negative. 
  // numbers will all be base-10 integers
  // the "-" character does not only occur in numbers
  // arrays may be ragged or empty

// input: an array that can have any dimensionality
// output: a number

// test cases:

// sum([["1"], "d2s", [[tr3s]]]) // 6
// sum([], "-a", ["-1"], ["2dias4"]) // 5 
// sum([]) // 0
// sum(["123coletos"], ["8polonch0s", "11valecitas2" ]) // 144

// data structures: arrays 

// algorithm:
// GOALS: flatten the array completely
// once the array is completely 1D extract all numeric values from the strings including negative values 
// reduce the array of numbers to get the final result

// helper function: flattenArr
  // input: an array
  // output: a 1D array

  // WHILE some elements are arrays
    // FLAT array
  // END WHILE

  // RETURN flatten array

// helper function: extract numbers
  // using regular expression

  // input: array of strings
  // output: array of numbers

  // FLATMAP input array
    // MATCH REGEX = /-?[0-9]+/g to string
  //  END MAP
  // MAP return value to Number
  // RETURN array of numbers

// main function: 
  // IF inputArr LEN === 0
    // RETURN 0
  // END IF

  // FLAT input array (helper function)
  // IF FLATTEN array LEN === 0
    // RETURN 0
  // END IF

  // MAP flatten array to numbers (helper function)
  // REDUCE array of numbers
  // RETURN

  function sum(arr) {
    if (arr.length === 0) return 0;

    let flatArr = flattenArr(arr);
    if (flatArr.length === 0) return 0;
    let numbers = extractNumbers(flatArr);

    return numbers.reduce((acc, n) => acc + n, 0);
  }

  function flattenArr(arr) {
    let result = arr;

    while (result.some(el => Array.isArray(el))) {
      result = result.flat();
    }

    return result;
  }

  function extractNumbers(arr) {
    return arr.flatMap(str => {
      return str.match(/-?[0-9]+/g);
    }).filter(n => n).map(Number);
  }

console.log(sum([["1"], "d2s", [['tr3s']]])); // 6
console.log(sum([[], "-a", ["-1"], ["2dias4"]])); // 5 
console.log(sum([])); // 0
console.log(sum([[[]]])); // 0
console.log(sum([["123coletos"], ["8polonch0s", "11valecitas2" ]])); // 144


console.log(sum(["1", "five", "2wenty", "thr33"])); // 36

console.log(sum([["1X2", "t3n"],["1024", "5", "64"]])); // 1099

console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]])); // 759