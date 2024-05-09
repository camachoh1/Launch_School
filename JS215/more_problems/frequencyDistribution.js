// problem:
// create a function that returns the frequency distribution of an array. The output should be an object where the keys are the unique elements and the values the frequency in which those elements occur


function getFrequencies(arr) {
  let resultObj = {}

  for(let i = 0; i < arr.length; i += 1) {
    if (!resultObj[arr[i]]) {
      resultObj[arr[i]] = 0;
    }

    resultObj[arr[i]] += 1;
  }

  return resultObj;
}

console.log(getFrequencies(["A", "B", "A", "A", "A"]));
console.log(getFrequencies([1, 2, 3, 3, 2]));
console.log(getFrequencies([true, false, true, false, false]));
console.log(getFrequencies([]));