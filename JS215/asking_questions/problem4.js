// ​Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.

// rules:
// all elements within the input array will be arrays
// in this case the sub array will contain only primitive data types.
// the input array might not contain any sub arrays
// in such case return an empty array
// I should expect a single array as argument.
// nan is not going to be included in the sub array
// if there are multiple null values in the sub array return the first one.
// there wont be any sparse sub arrays 
// if the input array contains one sub array and the sub array holds duplicate elements remove the duplicates. 
// each sub array may be of different length

// input: a 2D array
// output: a flatten array

// test cases: 

// flattenAndUnique([]) // []
// flattenAndUnique([['a','a',1,1]]) // ['a', 1]
// flattenAndUnique([[null], [null]]) // [null]
// flattenAndUnique([['1'], [1]]) // ["1"]
// flattenAdUnique([['a','b', '1'], [1, 2], ['c', 4, 5, 6]]) // ['a', 'b', '1', 2, 'c', 4, 5, 6]

// data structures: arrays

// algorithm: 
// GOALS: if the input array is empty return []
// create an array that keeps track of the seen elements.
// create a results array
// flatten the input array
// transform numbers into strings in order to compare if they are duplicates of number strings.
// if the current item is a number
// transform into a string 
// else leave as is
// if the current key is found in seen continue
// else push the key into seen and the item into result


function flattenAndUnique(arr) {
  const seen = [];
  const result = [];

  const flatArr = arr.flat();

  flatArr.forEach(item => {
    const key = typeof item === 'number' ? String(item) : item;

    if (seen.indexOf(key) === -1) {
        seen.push(key);
        result.push(item);
    }
  });

  return result;
}

console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([['a','a',1,1]])); // ['a', 1]
console.log(flattenAndUnique([[null], [null]])); // [null]
console.log(flattenAndUnique([['1'], [1]])); // ["1"]
console.log(flattenAndUnique([['a','b', '1'], [1, 2], ['c', 4, 5, 6]])); // ['a', 'b', '1', 2, 'c', 4, 5, 6]
console.log(flattenAndUnique([['a','b', 1], ['1', 2], ['c', 4, 5, 6]])); // ['a', 'b', '1', 2, 'c', 4, 5, 6]
/*
Can I assume I will only receive one argument and that that argument will be an array?
Can I assume that array will only contain arrays?
Can the inner arrays contain NaN and if so, how should NaN be compared to NaN?
  What about 'NaN'?
Can the outer array be empty? If so, what should the output be?
Can it be sparse? If so, how should empty elements be treated?
Can the inner arrays be empty, sparse, or have non-element properties?

Can the inner arrays contain non-string, non-number elements? If so, should
  they be compared to other data types in any unique way? How should objects
  and arrays be compared?
How should string / number equivalency be treated--by coercion, by visual nature, or
  some other criteria? That is, is '1a' considered a duplicate of 1 or '1'?
Can it have non-element properties? If so, how should they be treated?
*/