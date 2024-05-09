// problem: 

// given an object containing student names and their grades, return a function that list the students tho passed the course.

// the grades are provided as an array of strings. Where the grades are string numbers separated by a slash. The first number shows the student grade the second number the total of the exam "50/50"

// A student needs 100% marks in everything in order to pass the courses.

// input an object
// output an array containing the students that passed the course.

// rules: 
  // the output must be sorted alphabetically
  // all objects contain a student and grades
  // the grades array will always contain at least 1 element
  // the input will always be an object containing a student and an array of grades

// test cases: 

// // whoPassed({"pedro": ["4/5", "10/10", "20/20"],
//               "cole": ["5/5", "10/10", "20/20"]}) // ["cole"] 

// whoPassed({"pedro": ["4/5", "10/10", "20/20"],
//               "cole": ["4/5", "10/10", "20/20"]}) // []

// 

// data structures: arrays

// algorithm: 
// GOALS:
  // iterate through the grades array and split the values at the slash creating a 2D array
  // check if every element in every sub array appears more than once
  // if that is the case select the student name and pass it into the results array

// helper function: formatGrades
  // input an array of strings
  // output a 2D array each sub array containing pairs

  // ITERATE through the input array
    // SPLIT each string in the input array at the '/'
  // RETURN the split 2D array

// helper function: fullGrades
  // input a 2D array
  // output: a boolean

  // ITERATE throgh the input array
    // IF every subArr[0] === subArr[1]
      //RETURN true
    // ELSE 
      // RETURN false
    // END IF
  // END iteration

// main function: whoPassed
  // EXTRACT entries from input object
  // MAP grades (entries[1]) using helper function formatGrades
  // ITERATE mapped entries
    // IF fullGrades (helper function)
      // PUSH student name entries[0] into result
    // END IF
  // END ITERATION
  // RETURN result


function whoPassed(students) {
  let result = [];
  let entries = Object.entries(students);
  let mappedEntries = entries.map(entry => {
    return [entry[0], formatGrades(entry[1])]
  });
  
  mappedEntries.forEach(entry => {
    if (fullGrades(entry[1])) {
      result.push(entry[0]);
    }
  });

  return result.sort();
}

function formatGrades(arr) {
  return arr.map(str => str.split('/'));
}

function fullGrades(arr) {
  return arr.every(subArr => {
    return subArr[0] === subArr[1];
  });
}

console.log(whoPassed({"pedro": ["4/5", "10/10", "20/20"],
              "cole": ["5/5", "10/10", "20/20"]})); // ["cole"] 

console.log(whoPassed({"pedro": ["4/5", "10/10", "20/20"],
               "cole": ["4/5", "10/10", "20/20"]})); // []

console.log(whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
})) // ["Barry", "John"]

console.log(whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
})) // ["Alex", "Charlie", "Kris", "Zara"]

console.log(whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
})) // []