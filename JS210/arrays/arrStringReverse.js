function reverse(input) {
  let reversedOuput;
  
  if (Array.isArray(input)) {
    reversedOuput = [];
  } else if (typeof input === 'string') {
    reversedOuput = '';
  }
  
  for (let index = input.length - 1; index >= 0; index -= 1) {
    
    if (Array.isArray(reversedOuput)) {
      reversedOuput.push(input[index]);
    } else if (typeof reversedOuput === 'string') {
      reversedOuput += input[index];
    }
  }

  return reversedOuput;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
