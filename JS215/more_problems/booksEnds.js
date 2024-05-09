// problem: 

// given a string and a character representing a 'book end'
// write a function that returns the total number of unique characters in between the pairs of book ends. 

// rules: 
// one of the book ends is provided as an argument to the function
// the other book end is provided in the input string.

// if there are no characters between the two book ends return 0
// there could be multiple book end groups

// data structures: strings arrays

// algorithm:
// GOAL: initialize a switch variable to false
// create a result array
// iterate through the input string
// create a result string
// if the current character is equal to book end
// switch = !switch
// if switch 
// add character to the result string
// save result string into results

// create a frequency object
// return the count of elements with values === 1

// helper function: collectBooks
// input two strings (string, book end)

// output: an array of books

// CREATE resultArr
// INITIALIZE switch = false
// INITIALIZE resultStr = ''
// ITERATE through input string (for loop)
  
  // INITIALIZE char = string[i]

  // IF char === bookEnd
    // switch = !switch
  // END IF

  // IF switch
    // result += char
  // ELSE 
    // PUSH result into resultArr
    // result = ''
  // END IF
// END ITERATION

// RETURN resultArr



function countUniqueBooks(books, bookEnd) {
  let booksArr = collectBooks(books, bookEnd);
  if (booksArr.length === 0) return 0;
  
  let result = booksArr.map(book => countUniqueChar(book))

  return result
}

function collectBooks(books, bookEnd) {
  let resultArr = [];
  let resultStr = '';
  let pickBook = false;

  for (let i = 0; i < books.length; i += 1) {
    let char = books[i];

    if (char === bookEnd) {
      pickBook = !pickBook;
    }

    if (pickBook && char !== bookEnd) {
      resultStr += char;
    } else {
      resultArr.push(resultStr);
      resultStr = ''
    }
  }

  return resultArr.filter(book => book !== '');
}

// function frequencyCounter(book) {
//   let resultObj = {}
//   let count = 0
//   for (let i = 0; i < book.length; i += 1) {
//     let char = book[i];

//     if (!resultObj[char]) {
//       resultObj[char] = 0;
//     }

//     resultObj[char] += 1;
//   }
  
//   if (Object.keys(resultObj).length === 1) {
//     count += 1
//   } else {
//     count += Object.values(resultObj).reduce((sum, num) => sum += num, 0);
//   }
//   return count;
// }

function countUniqueChar(book) {
  return new Set(book).size
}

console.log(countUniqueBooks("AZYWABBCATTTA", "A"));
console.log(countUniqueBooks("$AA$BBCATT$C$$B$", "$")) // 3

console.log(countUniqueBooks("ZZABCDEF", "Z")) // 0