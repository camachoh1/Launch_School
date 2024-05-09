// problem: There is an array of strings. All strings contain similar strings except one.

// write a function that finds and return unique string in the array.

// input: an array of strings
// output a string

// rules: 
// input array may contain spaces.
// strings in the array may contain one or more spaces and words.
// check only non space characters in order to check wether a string is unique
// the input array will contain at least one string. 
// strings will contain both upper case and lowercase letters
// the strings will only contain alphabetic characters
// if there are more than one unique string return the string that appears first.

// test cases:
// findUnique(['aa','aa','aa']) // ''
// findUnique([' ', ' ', '    ']) // ''

// findUnique(['aa', 'aa', 'ab']) // 'ab'
// findUnique(['hello', 'hello world', 'hello']) // 'hello world'
// findUnique(['bb', 'bc', 'cc', 'bb', 'bc', 'bf']) // 'cc'

// data structures: arrays, objects

// algorithm:
// GOALS: create a frequency counter object.
// the keys will be the words in the input array the values will be the number of times each word appears in the array.
// extract the entries from the frequency counter object
// filter out the ones that have a value > 1
// if there are multiple unique strings 
// return the first one in the filtered array


// helper function: frequencyCounter
// input an array
// putput: an object

// CREATE a results object
// ITERATE through the input array
  // IF !resultObj[currentStr]
    // resultObj[currentStr] = 0
  // END IF

  // resultObj[currentStr] += 1
// END iteration
// RETURN resltObj

// main function: 
// input: an array of strings
// output: a string

// INITIALIZE cleanArr = MATCH alphabetic strings from input arr

// IF cleanArr LEN === 0 RETURN ''

// CREATE frequency counter (helper function)
// EXTRACT entries from freqObj
// FILTER freqEntries
  // IF entry[1] === 1
    // RETURN entry
  // END IF
//

// IF filteredEntry LEN === 0 RETURN ''

// RETURN filteredEntry[0][0]

function findUnique(arr) {
  let cleanArr = arr.filter(str => str.match(/[a-z]+/gi));
  
  if (cleanArr.length === 0) return '';

  let freqObj = frequencyCounter(arr);
  let entriesArr = Object.entries(freqObj);
  let filteredEntries = entriesArr.filter(entry => entry[1] === 1);
  
  if (filteredEntries.length === 0) return '';

  return filteredEntries[0][0];
}

function frequencyCounter(arr) {
  let resultObj = {};

  sortedArr.forEach(str => {
    if (!resultObj[str]) {
      resultObj[str] = 0;
    }

    resultObj[str] += 1;
  });

  return resultObj;
}

console.log(findUnique(['aa','aa','aa'])); // ''
console.log(findUnique([' ', ' ', '    '])); // ''

console.log(findUnique(['aa', 'aa', 'ab'])); // 'ab'
console.log(findUnique(['hello', 'hello world', 'hello'])); // 'hello world'
console.log(findUnique(['bb', 'bc', 'cc', 'bb', 'bc', 'bf'])); // 'cc'
