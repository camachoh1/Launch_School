// problem: write two functions:
  // retrieves all unique substrings that start and end with a vowel.
  // retrieves all unique substrings that start and end with a consonant

  // function 1 (vowels)
  // input: string
  // output: an array
  // if the input string does not contain any vowels return []
  
  // function 2(consonants) 
  // input: string
  // output: array
  // return [] if no consonants.

  // rules: the resulting array should be sorted in ascending order. 
  // both functions are case insensitive
  // the string may contains alphabetic and non-alphabetic chars.
  // the string could be of any length
  // my function will always receive a single argument
  // the input data type will always be a string.
  // exclue the empty string when outputting the array
  // the input word counts as a potential substring

  // test cases: 
  // getVowelSubstrings("bcf") // []
  // getVowelSubstrings("")  // []
  // getVowelSubstrings("@Aa1p2plEe") // [Aa, a, Ee]
  // getVowelSubstrings("AapplEe") // [A, Aa, a, AapplEe, Ee, e]
  // getVowelSubstrings("aa b d") // [a, aa]

  // getConsonantlSubstrings("aei") // []
  // getConsonantlSubstrings("")  // []
  // getConsonantlSubstrings("@Bb1p2plCc") // [B,Bb, b, p, p, C, Cc, c ]
  // getConsonantlSubstrings("AapplEe") // [p, pp, pl, l]
  // getConsonantlSubstrings("aa b d") // [b, b d, d]

  // data structures: arrays

  // algorithm: 
  // GOAL: collect every single substring by using nested iteration (2 for loops) to define start and end points 
  // use slice with start and ending point. helper function

  // helper function: check if the substring is valid by checking if the first and last character of the substring is either a vowel or a consonant

  // filter invalid strings, sort and return. 

  function getVowelSubstrings(str) {
    let substrings = getSubstrings(str);
    return substrings.filter(validSubstring).sort((a,b) => a.toLowerCase() - b.toLowerCase());
  }

  function getSubstrings(str) {
    let result = [];

    for (let start = 0; start <= str.length; start += 1) {
      for (let end = 0; end <= str.length; end += 1) {
        result.push(str.slice(start, end));
      }
    }

  return result.filter(substr => substr !== '');
  }

  function validSubstring(substring) {
    if (substring.length === 1 && /[aeiou]/i.test(substring)) return true;

    let last = substring[substring.length -1];
    let first = substring[0];

    return /[aeiou]/i.test(first) && /[aeiou]/i.test(last);
  }

  function getConsonantSubstrings(str) {
    let substrings = getSubstrings(str);
    return substrings.filter(validConsonantSubstring).sort((a,b) => a.toLowerCase() - b.toLowerCase());
  }

  function getSubstrings(str) {
    let result = [];

    for (let start = 0; start <= str.length; start += 1) {
      for (let end = 0; end <= str.length; end += 1) {
        result.push(str.slice(start, end));
      }
    }

  return result.filter(substr => substr !== '');
  }

  function validConsonantSubstring(substring) {
    if ((substring.length === 1) && (/[a-z]/i.test(substring) && /[^aeiou]/i.test(substring))) {
      return true;
    } 

    let last = substring[substring.length -1];
    let first = substring[0];

    return (/[a-z]/i.test(first) && /[^aeiou]/i.test(first)) && (/[a-z]/.test(last) && /[^aeiou]/i.test(last))
  }

console.log(getVowelSubstrings("bcf")); // []
console.log(getVowelSubstrings(""));  // []
console.log(getVowelSubstrings("@Aa1p2plEe")); // [Aa, a, Ee]
console.log(getVowelSubstrings("AapplEe")); // [A, Aa, a, AapplEe, Ee, e]
console.log(getVowelSubstrings("aa b d")); // [a, aa, a]

console.log(getConsonantSubstrings("aei")); // []
console.log(getConsonantSubstrings(""));  // []
console.log(getConsonantSubstrings("@Bb1p2plCc")); // [B,Bb, b, p, p, C, Cc, c ]
console.log(getConsonantSubstrings("AapplEe")); // [p, pp, pl, l]
console.log(getConsonantSubstrings("aa b d")); // [b, b d, d]