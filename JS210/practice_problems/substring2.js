function isNegativeOrNan(val) {
  return val < 0 || isNaN(val);
}

function greaterThanStr(val, strLength) {
  return val > strLength;
}

function startGreaterThanEnd(start, end) {
  return (start > end)
}

function validValues(start, end, length) {
  return (!isNegativeOrNan(start) && !isNegativeOrNan(end)) && (!startGreaterThanEnd(start, end)) && 
  (!greaterThanStr(start, length) && !greaterThanStr(end, length));
}

function substring(str, start, end) {
  if (start === end) {
    return "";
  }

  if (end === undefined) {
    end = str.length;
  }

  if (isNegativeOrNan(start)) {
    start = 0;
  }

  if (isNegativeOrNan(end)) {
    end = 0;
  }

  if (greaterThanStr(start, str.length)) {
    start = str.length;
  }

  if (greaterThanStr(end, str.length)) {
    end = str.length;
  }

  if (startGreaterThanEnd(start, end)) {
    [start, end] = [end, start]
  }

  let resultStr = '';
  if (validValues(start, end)) {
    for (counter = 0; counter < end; counter += 1) {
      let index = start + counter;

      if (str[index] === undefined || index === end) {
        break;
      }

      resultStr += str[index];
    }
  }
  return resultStr;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"


// ls solution

function substring(string, start, end) {
  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  let newString = '';
  for (let index = start; index < end; index += 1) {
    newString += string[index];
  }

  return newString;
}