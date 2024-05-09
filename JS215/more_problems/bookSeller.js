// problem:
// you are given two arrays: 
  // one array contains a stock list which are strings organized alphabetically each string contains letters (representing the products) and a number (representing the quantity )
  
  // the second array contains a list of letters
  // these leters represent the first letter of each product in the first array

// write a function that based on each entry in the second array, finds the products and quantities on the first array, sums the quantities of each product and returns a string showcasing the total sum of quantities and the letter of the second array that maps to the products in the first one.

// if an object from the second array is not found in the first one, then the final output should still return the object but with a product quantity of 0

// if any of the input arrays are empty return ""

// the output string should be formatted in the following way (A : 200) - (B : 1140)


// test cases:
  // stockList(["ABF 10", "ABB 20", "CMS 1", "DRE 2"], [A, B, C, D, X]) // (A : 30) - (C : 1) - (D : 2) - (X : 0)

// data structures: objects, arrays 
  
// algorithm:
  
  // nested iteration:
    // initialize a counter
    // iterate through the second list
    // iterate through the first list
      // if the element from the first list starts with the current char from the second list
      // increase the counter by the number in the string
  // return the current character plus the count
    // restart the counter
    // continue until finishing the iteration
  
  // format the output
  // map the elements of the result array into strings (arr[0] : arr[1])
  // join the result array with - 
  // return the string

function stockList(list1, list2) {
  if ([list1, list2].some(list => list.length === 0)) {
    return "";
  }

  let result = list2.map(el => {
    let sum = 0;
    list1.forEach(el2 => {
      if (el2[0] === el) {
        sum += Number(el2.match(/[0-9]+/)[0]);
      }
    })
    return `(${el} : ${sum})`
  });

  return result.join(' - ');
}

 console.log(stockList(["ABF 10", "ABB 20", "CMS 1", "DRE 2"], ['A', 'B', 'C', 'D', 'X'])); // (A : 30) - (C : 1) - (D : 2) - (X : 0)

console.log(stockList([], ["A", "B", "C", "D"]))