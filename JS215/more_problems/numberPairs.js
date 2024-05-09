// problem:
// write a function that receives a string of numbers separated by spaces. the function should return the number of pairs of numbers in the array that share the same value.

// the first numeric value in the string represents the count of the numbers, thus excluded in the pairings

// rules:
// if no pairs are found in the input string, return 0
// if the input is an empty string, return 0
// the first number in the input string should not be considered when counting pairs. 

// data structures: Arrays strings

// algorithm:
// GOALS: slice the input string in order to remove the first character.
// extract all numeric values from the sliced string into an array
// sort the array 
// extract the pairs and count them

// main function: numberPairs
// SLICE the input string from index 1
// MATCH all numeric characters
// SORT number array
// CREATE a results object

// ITERATE through the array of numbers
  // IF resultObj[current num]
    // resultObj[current num] += (resultObj[current num]
  // ELSE 
    // resultObj[current num] = 0;
  // END IF
// END ITERATIOIN

// CREATE counter
// ITERATE through resultObj values
    // count += currentValue / 2 (round down using floor)
// END ITERATION

// RETURN count


function numberPairs(numStr) {
  let nums = numStr.slice(1).match(/[0-9]+/g).sort();
  let pairsObj = {};

  nums.forEach((num) => {
    pairsObj[num] = (pairsObj[num] || 0) + 1
  });

  let pairCount = 0;

  Object.values(pairsObj).forEach(num => {
    pairCount += Math.floor(num / 2);
  });

  return pairCount;
}

console.log(numberPairs("7 1 2 1 2 1 3 2")); // 2
// (1, 1), (2, 2)

console.log(numberPairs("9 10 20 20 10 10 30 50 10 20")); // 3
// (10, 10), (20, 20), (10, 10)

console.log(numberPairs("4 2 3 4 1")); // 0