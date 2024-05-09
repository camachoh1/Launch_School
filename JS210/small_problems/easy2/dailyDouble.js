function crunch(str) {
  let resultStr = '';

  for(let i = 0; i < str.length; i += 1) {
    if (str[i] !== resultStr[resultStr.length - 1]) {
      resultStr += str[i];
    }
  }

  console.log(resultStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');  