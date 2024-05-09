const MIN_LOWERCASE_VAL = 97;
const MAX_LOWERCASE_VAL = 122;
const MIN_UPPERCASE_VAL = 65;
const MAX_UPPERCASE_VAL = 90;

function rotate(val, min, max) {
  let rotated = 0;
  let plus13 = (val + 13);
  if (plus13 > max) {
    plus13 = plus13 % max;
    rotated = (plus13 - 1) + min;
  } else {
    return plus13;
  }
  return rotated;
}

function rot13(str) {
  resultStr = '';

  for (index = 0; index < str.length; index += 1) {

    if (str[index].match(/[A-Z]/)) {
      let asciiNumeric = str[index].charCodeAt(0);
      let rotUpper = rotate(asciiNumeric, MIN_UPPERCASE_VAL, MAX_UPPERCASE_VAL);

      resultStr += String.fromCharCode(rotUpper);
    } else if (str[index].match(/[a-z]/)) {
      let asciiNumeric = str[index].charCodeAt(0);
      let rotLower = rotate(asciiNumeric, MIN_LOWERCASE_VAL, MAX_LOWERCASE_VAL);

      resultStr += String.fromCharCode(rotLower);
    } else {
      resultStr += str[index];
    }
  }
  return resultStr;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.')); // logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.'))); // logs: Teachers open the door, but you must enter by yourself.