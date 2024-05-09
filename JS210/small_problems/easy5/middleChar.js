function centerOf(str) {
  let middlePoint = Math.ceil(str.length / 2) - 1;
  let result = '';
  console.log(str.length);
  
  if (str.length % 2 === 0) {
    result =  str[middlePoint] + str[middlePoint + 1];
  } else {
    result = str[middlePoint];
  }
  return result;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"