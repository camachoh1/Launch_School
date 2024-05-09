// myReduce

// The built in reduce function requires a callback function. It will then pass 4 arguments to the callback function:

/*
- accumulators: The return value of the previous callback invocation (this is i the initial value on the first iteration).

- currentValue: The value of the current element in the Array.

- currentIndex: The index of the current element

- array: the array being processed. 

`reduce` passes the accumulator to the next callback invocation, and uses the return value of the final callback invocation as the overall return value of reduce. 

`reduce` accepts an optional second argument, the `initialValue`. It provides the value to use as the first argument in the first call to the callback. If the caller does not provide the `initialValue`, `reduce` uses the first element of the array; when this happens, `reduce` starts processing with the second element of the array. 

`reduce` returns the value returned by the final callback invocation. 
*/


// function myReduce(array, func, initial) {
//   let value;
//   let index;

//   if (initial === undefined) {
//     value = array[0];
//     index = 1;
//   } else {
//     value = initial;
//     index = 0;
//   }

//   array.slice(index).forEach(element => {
//     value = func(value, element);
//   })

//   return value;
// }

// let smallest = (result, value) => (result <= value ? result : value);
// let sum = (result, value) => result + value;

// console.log(myReduce([5, 12, 15, 1, 6], smallest));
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10));

// function longestWord(words) {
//   return myReduce(words, longest);
// }

// function longest(result, currentWord) {
//   return currentWord.length >= result.length ? currentWord : result;
// }

// console.log(longestWord(['abc', 'launch', 'targets', ''])); 
