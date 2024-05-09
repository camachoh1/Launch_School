function leadingSubstrings(str) {
  let substr = str.split('').map((_, index) => {
    return str.slice(0, index + 1);
  });

  return substr;
}

function substrings(str) {
  let charArr = str.split('');
  return charArr.flatMap((_, idx) => {
    return leadingSubstrings(charArr.slice(idx).join(''));
  });
}

function isPalindrome(str) {
  return str.length > 1 && str === str.split('').reverse().join('');
}

function palindromes(str) {
  let substArr = substrings(str);
  return substArr.filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));