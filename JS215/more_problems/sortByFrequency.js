// problem: given a string, write a function that sorts its characters based on their frequency. in decreasing order

// rules: if there are multiple answers return any of them.
// the input may contain both upper and lowercase chars 
// notice that uppercase chars are considered different of lowercase chars a !== A
// the output is a string

// input: a string
// output: a sorted string

// data structures: objects arrays strings

// algorithm: 
// split the input string into an array of characters.
// iterate through the array of chars and reduce it to an object containing each char as key and its count as value
// using the frequency object, sort the array of chars in decreasing order
  // if the frequencies are the same meaning a: 2 b: 2
  // sort lexicographically
  // else sort by frquency
// join the sorted array and return

// function frequencySort(string) {
//   const stringChars = string.split('');
//   const frequencies = stringChars.reduce((obj, char) => {
//     obj[char] = (obj[char] || 0) + 1;
//     return obj;
//   }, {});

//   return stringChars.sort((a, b) => {
//     if (frequencies[b] === frequencies[a]) {
//       return (a.localeCompare(b));
//     }

//     return frequencies[b] - frequencies[a];
//   }).join('');
// }

// great solution using reduce and repeat

const frequencySort = function(string) {
  const stringChars = string.split('');
  const frequencies = stringChars.reduce((obj, char) => {
    obj[char] = (obj[char] || 0) + 1;
    return obj;
  }, {});

  const sortedArr = Object.keys(frequencies).sort((a,b) => {
    return frequencies[b] - frequencies[a]; // sorts the keys by frequency
  });

  return sortedArr.reduce((acc, cur) => {
    acc += cur.repeat(frequencies[cur]);
    return acc; // creates the result string by repeating each char from the sorted array frequency times.
  }, '');
}

// test cases: 

// console.log(frequencySort('aa')) // 'aa'
// console.log(frequencySort('baa')) // aab
// console.log(frequencySort('bbbaaa')) /// bbbaaa | aaabbb
// console.log(frequencySort('hello')) // llheo | lleoh | llohe... return one of them
// console.log(frequencySort('Aabb')) // bbaA
// console.log(frequencySort('hello world')) // llloohe wrd (with a space somewhere)
// console.log(frequencySort('HeLlo wOrld')) // llHeLo wOrd (with a space somewhere)
// console.log(frequencySort('h3110')) // 11h30
console.log(frequencySort("loveleetcode")) // "eeeeoollvtdc"
