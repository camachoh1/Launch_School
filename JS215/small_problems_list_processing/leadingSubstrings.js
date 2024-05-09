// function leadingSubstrings(str) {
//   let substrArr = [];

//   for (let length = 1; length <= str.length; length += 1) {
//     substrArr.push(str.slice(0, length));
//   }

//   return substrArr;
// }


function leadingSubstrings(str) {
  let substr = str.split('').map((_, index) => {
    return str.slice(0, index + 1);
  });

  return substr;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]