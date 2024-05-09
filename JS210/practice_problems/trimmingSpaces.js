function removeFrontSpaces(str) {
  let result = '';
  let copyMode = false;
  for (index = 0; index < str.length; index += 1) {
    if (str[index] === ' ' && copyMode === false) {
      continue;
    } else {
      result += str[index];
      copyMode = true
    }
  }
  return result;
}

function removeBackspaces(str) {
  let result = ''
  let copyMode = false;

  for (index = str.length - 1; index >= 0; index -= 1) {
    if (str[index] === ' ' && copyMode === false) {
      continue;
    } else {
      result = str[index] + result;
      copyMode = true;
    }
  }
  return result;
}

function trim(str) {
  let noFrontSpaces = removeFrontSpaces(str);
  let result = removeBackspaces(noFrontSpaces);
  return result;
}



console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
trim('      ');   // ""
trim('');         // ""