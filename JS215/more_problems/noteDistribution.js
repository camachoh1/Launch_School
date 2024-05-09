// problem:
// given an array containing objects whose values are the name of the students and arrays containing grades, create a function that returns the total distribution of grades between all the strudents.

// the output should be formatted as an object

// rules
  // all valid grades are positive numbers between 1 and 5.
  // not valid grades are ignored.
  // the function should make use of the filter and reduce functions
  // assume the array input will always contain objects.

// test cases:

// getNotesDistribution([{name: "burro", notes: [1,0,3,4]}, {name: "coleto", notes: [3,4,4,6]}) // {4: 3, 3: 2, 6: 1, 1: 1}

// data structures: arrays objects

// GOAL: extract all notes from the input objects
// filter the invalid notes
// join the valid notes arrays 
// reduce its values in an object

// CREATE an array to hold the notes
// ITERATE through the input array
// PUSH each group of notes into the notes array
// FLATTEN the notes array
// FILTER the notes array from non valid notes

// REDUCE the notes array
  // using an empty object as the accumulator and n as current number
    // IF !accumulator[n]
      // accumulator[n] = 0
    // END IF

    // accumulator[n] += 1
    // RETURN the accymulator

function getNotesDistribution(arr) {
  let notesArr = [];
  arr.forEach(({notes}) => {
    notesArr.concat(notes);
  });

  let validNotesArr = notesArr.flat().filter(n => n > 0 && n <= 5);

  return validNotesArr.reduce((acc, n) => {
    if (!acc[n]) {
      acc[n] = 0;
    }

    acc[n] += 1;
    return acc;
  }, {});
}

// console.log(getNotesDistribution([{name: "burro", notes: [1,0,3,4]}, {name: "coleto", notes: [3,4,4,6]}])); // {4: 3, 3: 2, 6: 1, 1: 1}

console.log(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]));