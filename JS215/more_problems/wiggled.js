// problem:

// create a function that receives a string and returns an array containing duplicates of the input string offset by spaces.

// the maximum number of spaces that can be prepended to each duplicate is the length of the input string. 

// once the pattern reaches the maximum length it continues but in reverse. The strings are prepended n - 1 spaces until no spaces are prepended.

// input: a string
// output an array of strings.

// examples:

// note that empty strings ("") return ""

// spaces (" ") return    [" ", 
                      //  "  ", 
                      //  " "]


// data structures: arrays and strings

// algorithm:

//initialize a results array

// use a for-loop that iterates up to the string length
  // pushes " " * i + str

// use a second for-loop iterates from the string length -1 all the way down to 0
  //pushes " " * i + str

// iterate through the results array and log each string.


function wiggleString(str) {
  let result = [];

  for (let i = 0; i <= str.length; i += 1) {
    result.push(' '.repeat(i) + str);
  }

  for (let i = str.length - 1; i >= 0; i -= 1) {
    result.push(' '.repeat(i) + str);
  }

  result.forEach(s => console.log(s));
}

wiggleString("hello");
wiggleString("EDABIT")
wiggleString("Wiggle Time")
wiggleString(" ") 

