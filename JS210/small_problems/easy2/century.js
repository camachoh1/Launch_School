function suffix(century) {
  let numStr = String(century);
  let result = ''
  let lastNumChar = numStr[numStr.length - 1];
  
  if (century % 100 === 11 || century % 100 === 12 || century % 100 === 13) {
    result = 'th';
  } else if (numStr[lastNumChar] === '1' || numStr.length == 1) {
    result = 'st';
  } else if (numStr[lastNumChar] === '2' || numStr.length == 1) {
    result = 'nd';
  } else if (numStr[lastNumChar] === '3' || numStr.length == 1) {
    result = 'rd';
  } else {
    result = 'th';
  }

  return result;
}

function century(year) {
  let century = 0
  if (year % 100 === 0) {
    century = year / 100;
  } else {
    century = parseInt(year / 100) + 1
  }

  return String(century) + suffix(century);
  
}


function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"