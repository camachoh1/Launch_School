// problem: 
// write a function that receives a string in PascalCase and returns the string in snake_case

// rules: 
  // if a number is passed as input, it must be turned into a string
  // snake_case notation lowercases all letters and separates each word with an underscore

// test cases:
  // toSnakeCase("HelloWorld") // hello_world
  // toSnakeCase("TestString1") // test_string1
  // toSnakeCase("ProblemSolvingSkills") // problem_solving_skills
  // toSnakeCase(0) // "0"
  // toSnakeCase("") // ""

// data structures: arrays // strings

// algorithm:
  // extract the index of the uppercase letters:
    // iterate through the string if the current char is an uppercase letter extract its index into an array
  
  // iterate through the array of index, use each index to slice the string into words:
    // if index + 1
      // slice the input string from index to index + 1
    // else 
      // slice the input string from index
  
  // once we have the words separated lowercase every word and join using _ as delimiter

// function upperCaseIndex(str) {
//   let idxArr = [];
//   str.split('').forEach((char, index) => {
//     if (char.match(/[A-Z]/)) {
//       idxArr.push(index);
//     }
//   })

//   return idxArr;
// }

// function toSnakeCase(pascal) {
//   if (typeof pascal === 'number') return pascal;

//   let upperCaseIdx = upperCaseIndex(pascal);
//   let words = [];
  
//   upperCaseIdx.forEach((_, index) => {
//     if (index + 1) {
//       words.push(pascal.slice(upperCaseIdx[index], upperCaseIdx[index + 1]));
//     } else {
//       words.push(pascal.slice(upperCaseIdx[index]));
//     }
//   });

//   return words.map(w => w.toLowerCase()).join('_');
// }


// simpler approach using a for loop and building the result string by character. 

function toSnakeCase(pascal) {
  // if (typeof pascal === "number") {
  //   return String(number);
  // }

  // let result = "";

  // for (let i = 0; i < pascal.length; i += 1) {
  //   if (i !== 0 && pascal.match(/[A-Z]/)) {
  //     result += "_" + pascal[i].toLowerCase();
  //   } else {
  //     result += pascal[i].toLowerCase();
  //   }

  // return result;
}

console.log(toSnakeCase("HelloWorld")); // hello_world
console.log(toSnakeCase("TestString1")); // test_string1
// console.log(toSnakeCase("ProblemSolvingSkills")); // problem_solving_skills
// console.log(toSnakeCase(0)); // "0"
// console.log(toSnakeCase("")); // ""


// pascal.split(/([?=[A-Z])/); 

// outputs: [ '', 'H', 'ello', 'W', 'orld' ]

// /(?=[A-Z])/ is a positive lookahead that asserts what follows is an uppercase English letter from A to Z.

//     () is used for grouping.
//     ?= is a positive lookahead. A lookahead is a type of zero-width assertion in regular expressions, which specifies a condition that must be met before a match is returned. Zero-width assertions don't consume characters in the string, but only assert whether a match is possible or not.
//     [A-Z] matches any uppercase English letter from A to Z.

// So in plain English, the expression /(?=[A-Z])/ can be read as: "Look ahead to see if there is an uppercase letter. If there is, match the current position (without consuming any characters)."

// This regular expression could be used in JavaScript's split method, for example, to split a string at the positions just before uppercase letters, which can be useful for converting a string from camelCase or PascalCase to snake_case, among other things.