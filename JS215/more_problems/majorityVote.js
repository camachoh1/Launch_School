// problem: create a function that returns the majority vote in an array. 

// rules:
// A majority vote is an element that occurs > n/2 times in an array where N is the length of the array

// if there is no majority element return null

// if the input array is empty return null

// test cases:

// majorityVote(["A", "B", "C"]) // null
// majorityVote([]) // null
// majorityVote(["A, "A", "B", "C"]) // null

// majorityVote(["true", "true", "true", "false"]) // "true"
// majorityVote(["A", "A", "B"]) // "A"

// data structures: arrays objects

// algorithm:
// GOAL: calculate N by dividing the length of the input array by 2
// create a frequency object: where each element of the array is the object and the value is the count of the object
// select the element whose value is > N

// helper function: frequencyCounter
// input: an array
// output: an object

// CREATE a result object
// ITERATE through the input array
  // IF !result[el]
    // result[el] = 0
  // END IF
    // result[el] += 1
// END iteration

// RETURN resultObj

// mian function: majorityVote
// input: array
// output: the majority element from the array (could be any data type provided in the input)

// IF arr LEN === 0 RETURN null

// INITIALIZE maxVal = FLOOR (arr LEN / 2)
// INITIALIZE frequencyObj = fequencyCounter(arr)

// EXTRACT entries from frequencyObj
// FILTER fequencyEntriesArr
  // IF subArr[1] > maxVal
    // RETURN subArr
  // END IF
// END FILTER

// IF filteredEntries LEN === 0
  // RETURN null
// ELSE
  // RETURN subArr[0]
// END IF


function majorityVote(arr) {
  if (arr.length === 0) return null;

  let maxVal = Math.floor(arr.length / 2);
  let freqObj = frequencyCounter(arr);

  let freqEntries = Object.entries(freqObj);
  let filteredEntries = freqEntries.filter(entry => {
    return entry[1] > maxVal;
  });

  if (filteredEntries.length === 0) {
    return null;
  } 

  return filteredEntries[0][0];
}

function frequencyCounter(arr) {
  let resultObj = {};

  arr.forEach(el => {
    if (!resultObj[el]) {
      resultObj[el] = 0;
    }

    resultObj[el] += 1;
  });

  return resultObj;
}

console.log(majorityVote(["A", "B", "C"])); // null
console.log(majorityVote([])); // null
console.log(majorityVote(["A", "A", "B", "C"])); // null
console.log(majorityVote(["true", "true", "true", "false"])); // "true"
console.log(majorityVote(["A", "A", "B"])); // "A"