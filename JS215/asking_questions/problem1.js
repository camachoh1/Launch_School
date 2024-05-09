// problem:

// given an array of strings, `arr` and an integer `k` return the `k`th distinct string present in the array. If there are fewer than `k` distinct strings, return an empty string "".

// rules:
  // distinct strings are strings that are present only once in the array.
  // if the number of distinct strings is < k return ""
  // else return the kth distinct string from the array.

// questions:
  // what happens if the input array is empty? return ""
  // what happens if we are receiving a sparse array? undefined values do not count as distinct since they are not strings.

  // the description states the input is an array of strings, what happens if there is an element that is not a string?
  
  // what if k is greater than the amount of distinct strings provided? -> return ""

  // what if k is < than the number of distinct strings provided? -> return the kth string anyways

  // input: an array of strings and a number

  // output: a string. which is the distinct string located at kth position.

  // examples:

  // distinctString(['s', 's' 'y', 'z'], 3) //'z'
  // distinctString(['a', 'b', 'b' 'c'] 3) // ""
  // distinctString(['abc', 'Abc', 'abbc', 'xyz'], 2) // 'xyz'
  // distinctString(['a','b','c'], 2) // 'b' 
  // distinctString([], 2) // ""
  // distinctString(['2', '2', , '2', '42'], 0) // "" 

  // data structures: arrays, objects.
  // one of the input value is an array.
  // I will use an object in order to count the appearance of each element in the array. 

  // algorithm: 
    // create guard clauses: 
      // return "" if the array length is 0, if the number is 0.
    
      // declare a new variable count and initialize it to the return value of counter function

      // create helper function counter:
        // receives an array as argument returns a new object.
        // iterates through the array and counts each element adding the count as value to the result object.
      
    // create an array of distinct objects by selecting the keys from the count object whose value is === 1

    // return the (k - 1)value from the distinct array
    // if the value at index k is undefined return ""


    // function distinctString(arr, num) {
    //   if (arr.length === 0 || num === 0) return "";

    //   let count = countDistinct(arr);
    //   console.log(count);

    //   let distinct = Object.entries(count).filter(subarr => subarr[1] === 1).map(subarr => subarr[0]);
      
    //   console.log(distinct);
    //   if (distinct[num - 1]) {
    //     return distinct[num - 1]; 
    //   } else {
    //     return "";
    //   }
    // }

    // function countDistinct(arr) {
    //   let resultObj = {};

    //   arr.forEach(el => {
    //     if (!resultObj[el]) {
    //       resultObj[el] = 0;
    //     }

    //     resultObj[el] += 1;
    //   });

    //   return resultObj;
    // }

// console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a")
// console.log(distinctString(['s', 's', 'x','y', 'z'], 3)); //'z'
// console.log(distinctString(['a','b','c'], 2)); // 'b' 
// console.log(distinctString(['abbc','abc', 'abc', 'xyz'], 2)); // 'xyz'
// console.log(distinctString(['a', 'b', 'b', 'c'], 3)); // ""
// console.log(distinctString([], 2)); // ""
// console.log(distinctString(['2', '2', '2', '42'], 0)); // "" 
// console.log(distinctString(['2', null, 2, undefined], 2)); // "" 



// Will we always receive precisely two arguments? If not, what should I do if an argument is omitted? What should I do if there are more than two arguments?

// Will the first argument always be an array? If not, what should I do?

// Will the second argument always be an integer? If not, what should I do if it isn't?
// Will the second argument ever be 0? If so, what should I do?

// Will the second argument ever be negative? If so, what should I do?

// Can the array be sparse? If so, how should I handle the missing elements?

// Can the array contain any number of elements?

// Can the array be empty? If so, what should I return in that case?

// Will strings always be one character long, or can they be any length?

// Will k always be a positive number greater than 0? If not, how should I handle negative numbers and 0?

// Should I return an empty string if there aren't k distinct strings?

// ['a', 'a'] 1 // no distinct k string

function distinctString(arr) {
  let result = [];

  arr.sort().forEach((el, index) =>  {
    if (arr[index] !== arr[index - 1] && result.indexOf(el) === -1) {
      result.push(el);
    }
  });

  return result;
}

// console.log(uniques(['2', null, 2, 2, undefined]));
// console.log(uniques(["d","b","c","b","c","a"], 2)); // "a")


console.log(["d", "b", "c", "b", "c", "a", "A", "e"], 2) // 'e'
console.log(distinctString(['abc', 'Abc', 'abbc', 'xyz'], 2)) // 'xyz'