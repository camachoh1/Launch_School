function doubleConsonants(str) {
  let resultString = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i].toLowerCase().match(/[aeiou]/) || str[i].match(/[^A-Za-z]/)) {
      resultString += str[i];
    } else {
      resultString += (str[i] + str[i]);
    }
  }

  return resultString;
}

console.log(doubleConsonants('string'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""