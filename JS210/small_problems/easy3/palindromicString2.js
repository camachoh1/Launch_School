function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function isRealPalindrome(str) {
  let cleanStr = '';

  for(let i = 0; i < str.length; i += 1) {
    if (str[i].match(/[a-zA-Z0-9]/)) {
      cleanStr += str[i].toLowerCase();
    }
  }

  return isPalindrome(cleanStr);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false