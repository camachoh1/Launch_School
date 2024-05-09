
function longestCommonPrefix(words) {
  if (!Array.isArray(words) || words.length === 0) return '';
  let prefix = '';

  for (let i = 0; i < words[0].length; i += 1) {
    let char = words[0][i]
    if (!char) return '';
    if (words.every(word => word[i] === char)) {
      prefix += char;
    } else break; 
  }
  return prefix;
  }
// test cases:


console.log(longestCommonPrefix()) // ''
console.log(longestCommonPrefix({})) // ''
console.log(longestCommonPrefix("A")) // ''
console.log(longestCommonPrefix(['abc', 'def'])) // ''
console.log(longestCommonPrefix(["", ""])) // '' 

console.log(longestCommonPrefix(['hello'])) // ['hello']
console.log(longestCommonPrefix(["", 'hello'])) // ''
console.log(longestCommonPrefix(['hello', 'helicopter', 'helium'])) // 'hel'

console.log(longestCommonPrefix([12, "a", 'aaba', 'aba'])) // ''
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'


console.log(longestCommonPrefix(['house', 'home', 'homer'])) // 'ho'
console.log(longestCommonPrefix(['heart',,'heat', 'hi'])) // 'h'
console.log(longestCommonPrefix(['1223', '122345', '12234556'])) // '1223'