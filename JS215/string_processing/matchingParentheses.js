// using forEach:

function isBalanced(string) {
  if (string[0] === ')' || string[string.length - 1] === '(') {
    return false;
  }
  
  let count = 0;
  let strArr = string.split('');

  strArr.forEach(char => {
    if (char === ')') {
      count += 1;
    } else if (char === '(') {
      count -= 1;
    }
  });

  return count === 0;
}

// using a for loop:
function isBalanced(string) {
  let count = 0;

  for (let i = 0; i < string.length; i += 1) {
    
    if (string[i] === '(') {
      count += 1;
    } else if (string[i] === ')') {
      count -= 1;
    } 

    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false