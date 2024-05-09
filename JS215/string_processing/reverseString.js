// // using high abstraction methods: 

// function reverse(string) {
//   return string.split('').reverse().join('')
// }


// using lower abstraction, for loop:

function reverse(string) {
  let result = '';

  for (let i = string.length - 1; i >= 0; i -= 1) {
    result += string[i];
  }

  return result;
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"