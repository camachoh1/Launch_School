// problem: given a pattern an a string s find if s follows the same pattern. 

// input: two strings
// output: a boolean

// rules: 

// here follows means a full match, such that there is a bijection between an letter in pattern and a non-empty word in s
// the input will be made of lowercase english letters and spaces.
// s wont have any leading or trailing spaces spaces. 

// example: 

// pattern aaba s = apples apples rocks apples 
// in this case the function returns true this is because the string follows the same pattern which is an element repeated twice in a row followed by a different element followed by the same element at the beginning

// data structures: arrays strings

// algorithm: 

// in order to make sure that every word in s matches the pattern.
// map each word from s to each char in pattern.
// this can be done by finding the distinct values in s and the distinct values of pattern

// create an object called match 
// the keys of this object are the words from s
// the values the chars in pattern

// split s once more and map each word to the values of the match object.

// if the resulting string is the same as the pattern return true else return false

/// pattern = 'abba' s = dog cat cat dog

/// unique pattern chars = [a b]
// unique s words = [dog cat]

// map each word to chars in pattern by iterating through word with index
// result[word] = pattern[index]

// match = {dog: a, cat: b}

// split the s once more and map each word to the values in match

// [dog, cat, cat, dog] -> word = dog match[word] -> a
// word = cat -> match[word] -> b 
// word = cat -> match[word] -> b
// word = dog -> match[word] -> a

// [a,b,b,a] -> 'abba' === pattern 



// function wordPattern(pattern, s) {
//   if ([pattern, s].some(string => string === '')) return false;
//   if (pattern.length < s.split(' ').length) return false;
//   let match = {}
//   let wordsArr = [...new Set(s.split(' '))]
//   let patternArr = [...new Set(pattern)]

//   wordsArr.forEach((word, index) => {
//     match[word] = patternArr[index];
//   });


//   return s.split(' ').map(word => {
//     return match[word];
//   }).join('') === pattern;

// }

// // test cases: 
// console.log(wordPattern("", "a")) // false 
// console.log(wordPattern("a", "")) // false 
// console.log(wordPattern("abc", "apple apple apple")) // false
// console.log(wordPattern("abc", "apple, rock")) // false
// console.log(wordPattern("ab", "apple rock dog")) // false
// console.log(wordPattern("", "")) // false 

// console.log(wordPattern("a", "apple")) // true 
// console.log(wordPattern("aaa", "apple apple apple")) // true 
// console.log(wordPattern("aaba", "apple apple rock dog")) // false
// console.log(wordPattern('aaba', 'apple apple rocks apple')) // true
// console.log(wordPattern('aaba', 'apple rocks apple apple')) // false


function isIsomorphic(s, t) {
  let match = {}
  let sArr = [...new Set(s)]
  let tArr = [...new Set(t)]

  sArr.forEach((char, index) => {
    match[char] = tArr[index];
  });


  return s.split('').map(char => {
    return match[char];
  }).join('') === t;
}

console.log(isIsomorphic('foo', 'title'))