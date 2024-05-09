// problem: 

// given an object where the keys are number strings and the values are array of characters, createa function that returns an object with the same keys but with the duplicate values removed.

// rules:
  // duplicate values are elements present in multiple array values for example:
    // {1: ['a', 'b'], "2": ['a', 'c'] } in this case 'a' is a duplicate value
  
  // in order to decide which key keeps the element, we need to compare they keys numeric value. using the example above, 
  // 2 > 1 so the array that is value of "2": gets to keep the object resulting in:
    // {1: [b], 2: [a, c]}

  // if a value array contain multiple repeated values, the first one in the array is kept for example: ['a', 'b', 'a'] -> ['a', 'b']

  // test cases:
    // removeDuplicates({"1": ['a','b','c'], "2": ['b', 'x', 'c']}) // {"1": ['a'], "2": ['b', 'x', 'c']}
    
    // removeDuplicates({"23": ['c', 'b', 'd'], "1": ['c', 'b', 'd]) // {"23": ['c','b','d'], "1": []}

    // removeDuplicates({"2": [], "1": ['c', 'f', 's']}) // returns the same object

    // removeDuplicates({"432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// })  // { "11": ["P", "R", "S"],
      //   "53": ["C"],
      //   "236": ["L", "X", "G", "H"],
      //   "432": ["A", "B", "D"], }

// data structures: arrays and objects 

// 