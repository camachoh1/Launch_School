// problem: 
// create a function that identifies the very first item that has recurred in the string argument. The function returns an object with the identified item as key and an array of numbers containing the index number of the first aperance of the key and the index of where it resurfaced next.

// input: a string
// output: an object

// rules:
  // the function returns an empty object if the input is "", null, no object is provided, or the string does not include recurring items

// test cases:
  // recurIndex("") // {}
  // recurIndex() // {}
  // recurIndex(null) // {}
  // recurIndex("abcd") // {}

  // recurIndex("aba") // {a: [0, 2]}
  // recurIndex("abaa") // {a: [0, 2]}
  // recurIndex("abcdcdec") // {c: [2, 4]}

// data structures: Strings, arrays and objects

// algorithm: 
// GOALS: 
  // get the index of the first two appearances of every character in the string returning them as objects where they key is the character and the value is an array containing its two index

  // find the character in the object which has the smallest diference between the two index.

  // return that character along with its two index.

  // helper function: get the first two index for every character
  // CREATE guard clause
    // IF !input return {}
    // CREATE result Obj
    // ITERATE through the input string twice
      // FOR i1 = 0 to end of the string
      // CREATE indexArr
        // FOR i2 = 0 to end of the string
          // IF str[i1] === str[i2]
            // PUSH i2 into indexArr
          //END IF
          // IF indexArr LEN === 2
            // BREAK
          // END IF
        // END FOR
      // resultObj[str[i]] = indexArr
      // END FOR
  // FILTER the result Obj return the value with lowest index 

  // helper function: get the character with smallest difference between the two indexes

    // EXTRACT the ENTRIES from the input object
    // FILTER the entries array
      // IF index array LEN === 2
        // keep arr
      // END IF
    
    // MAP the indexArray from entries
      // REDUCE the index array by subtracting its values
    // END MAP

    // SORT the mapped array in ascending order
    // RETURN the character with smallest difference (index 0)

  // main function:
  // IF !string
    //RETURN {}
  // END IF

  // GET all index = locations (helper function) 
  // GET char with smallest distance between index = char
  // CREATE result object
  // RETURN result[char] = locations[char]

function recurIndex(string) {
  if (!string) return {};
  
  let locations = getCharacterLocations(string);
  let key = findSmallestDifference(locations);
  let value = locations[key];

  if (key === '') return {};

  return {[key]: value};
}

function getCharacterLocations(string) {
  let resultObj = {}

  for (let outerIdx = 0; outerIdx < string.length; outerIdx += 1) {
    let characterIdx = [];
    for (let innerIdx = 0; innerIdx < string.length; innerIdx += 1) {
      if (string[outerIdx] === string[innerIdx]) {
        characterIdx.push(innerIdx);
      }

      if (characterIdx.length === 2) {
        break;
      }
    }

    resultObj[string[outerIdx]] = characterIdx;
  }

  return resultObj;
}

function findSmallestDifference(locations) {
  let entries = Object.entries(locations);
  entries = entries.filter(subArr => subArr[1].length > 1);

  if (entries.length < 1) {
    return ''
  }
  entries = entries.map(subArr => {
    return [subArr[0], subArr[1].reduce((acc, n) => n -= acc, 0)];
  });

  let result = entries.sort((a,b) => a[1] - b[1])[0][0];
  return result;
}

console.log(recurIndex("DXTDXTXDTXD")) // {"D": [0, 3]}

console.log(recurIndex("YXZXYTUVXWV")) // {"X": [1, 3]}

console.log(recurIndex("YZTTZMNERXE")) // {"T": [2, 3]}

console.log(recurIndex("AREDCBSDERD")) // {"D": [3, 7]}

console.log(recurIndex("")); // {}

console.log(recurIndex(null)); // {}

console.log(recurIndex()) // {}

console.log(recurIndex("abcd")) // {}

console.log(recurIndex("aba")); // {a: [0, 2]}
console.log(recurIndex("abaa")); // {a: [0, 2]}
console.log(recurIndex("abcdcdec")); // {c: [2, 4]}
