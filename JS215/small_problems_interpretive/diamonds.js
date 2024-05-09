// problem: 

// Write a function that displays a four-pointed diamond in an n x n grid where n is an odd integer.

// input: an integer
// output: logs a diamond

// rules: 
  // the input integer is always an odd number 
  // the diamond is made of stars and spaces
  // at its widest point, the diamond is n size
  // at its smallest point the diamond is made of a single star and the remaining spaces make a width total n
  // the bottom part of the diamond is completed by repeating the pattern in reverse
  
  // input 3:
    // '' * '' total 3
    //   ***   total 3 widest point
    // '' * '' total 3

  // input 5:
    // ''''*
    // ''* * *
    // * * * * *

// data structures: strings, numbers, arrays

// algorithm: 
  // declare and initialize an increment variable to 2. 
  // create the pattern using numbers in an array
  // using a for loop
    // start the incrementer to 1 iterate until the incrementer is < 0
    // increment by the incrementer value
    // push each number into the pattern array
    // once i === n
      // reasign the incrementer to -2
    
    // iterate through the pattern array
    // use repeat() to log the number of spaces and stars 

// function diamond(n) {
//   if (n % 2 === 0) return "invalid";
//   let stars = createPattern(n);
//   drawDiamond(stars, n);
// }

// function createPattern(n) {
//   let increment = 2;
//   let pattern = [];

//   for (let i = 1; i > 0; i += increment) {
//     pattern.push(i);

//     if (i === n) {
//       increment = -2;
//     }
//   }
//   return pattern;
// }

// function drawDiamond(pattern, n) {
//   pattern.forEach(stars => {
//     console.log(' '.repeat(n - stars / 2) + '*'.repeat(stars));
//   });
// }


// further exploration: 

// function diamond(n) {
//   if (n % 2 === 0) return "invalid";
//   let stars = createPattern(n);
//   drawDiamond(stars, n);
// }

// function createPattern(n) {
//   let increment = 2;
//   let pattern = [];

//   for (let i = 1; i > 0; i += increment) {
//     pattern.push(i);

//     if (i === n) {
//       increment = -2;
//     }
//   }
//   return pattern;
// }

// function drawDiamond(pattern, n) {
//   pattern.forEach(stars => {
//     console.log(' '.repeat(n - stars / 2) + '*'.repeat(stars));
//   });
// }


// diamond(9);

//problem: write a function that displays a four pointed diamond in an n x n grid, where n is an odd integer supplied as an argument to the function.

// the input will always be an odd integer. 

// algorithm:

// helper functionc reate pattern:
// this function creates the number of stars that will be logged to the screen.

// since the pattern increments by two, 
// using a for loop, 
// push every index from the initial value up to the input number
// create a copy of the index array, reverse it and slice it to exclue index 0
// concatenate the two arrays and return the return value for n = 5
// [1,3,5,3,1] -> [1,3,5] [5,3,1] slice index 0 in reversed [3,1]
// concatenate with the results array [1,3,5] [3,1] -> [1,3,5,3,1]

// main function: 
// iterate through the pattern array and log the spaces repeated i / 2 + stars repeated i times 

function getPattern(n) {
  let result = [];

  for (let i = 1; i <= n; i += 2) {
    result.push(i)
  }
  let reversed = [...result].reverse().slice(1);
  return result.concat(reversed);
}

function diamond(n) {
  let pattern = getPattern(n);
  
  pattern.forEach(num => {
    console.log(" ".repeat(n - num / 2) + '*'.repeat(num));
  });
}

console.log(diamond(5));