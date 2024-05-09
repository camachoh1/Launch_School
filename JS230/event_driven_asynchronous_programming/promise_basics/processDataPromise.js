// callback

// function processData(array, callback) {
//   setTimeout(() => {
//     callback(array);
//   }, 1000);
// }

// function processNumbers(array) {
//    console.log(array.map(number => number * 2));
// }

// processData([1,2,3], processNumbers);

// promise


function processDataPromise(arr) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const processed = arr.map((number) => number * 2);
      resolve(processed);
    }, 1000);
  })
}

processDataPromise([1,2,3]).then((processedNumbers) => {
  console.log(processedNumbers);
});




// function processDataPromise(numbers) { // this function returns a promise object, it takes an array of numbers as an argument.
//   return new Promise((resolve) => { // the new promise is created and returned. This promise receives a function call(executor) which runs automatically when the promise is created. it takes a function call (resolve) which performs the operations we want.
//     setTimeout(() => { // after a 1 second delay, the numbers argument is processed and passed as an arguent to resolve.
//       const processed  = numbers.map((number) => number * 2)
//       resolve(processed);
//     }, 1000)
//   });
// }

// let promise = processDataPromise([1,2,3]); // invoke the function with an array of numbers as an argument. This will return a promise.

// console.log(promise.then((processedNumbers => { // we use .then() to specify what to do with the resolved function. We pass a callback to .then() as an argument, this callback logs the value of the processed numbers. 
//   console.log(processedNumbers);
// })));


