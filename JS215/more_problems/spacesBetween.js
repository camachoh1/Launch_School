// problem: write a function that inserts a whitespace between every instance of a lower character followed by an upper character

function insertWhiteSpace(str) {
  let result = ''

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== 0 && /[A-Z]/.test(str[i])) {
      result += ' ' + str[i];
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(insertWhiteSpace("SheWalksToTheBeach"));
console.log(insertWhiteSpace("MarvinTalksTooMuch"));
console.log(insertWhiteSpace("TheGreatestUpsetInHistory"))