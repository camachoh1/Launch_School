let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  let lengths = arr.map(function(str) {
    return str.length
  });

  return lengths.filter(function(num) {
    if (num % 2 === 1) {
      return num 
    }
  });
}


console.log(oddLengths(arr)); 