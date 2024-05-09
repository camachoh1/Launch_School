// problem: a sentence is smooth if the last letter of each word is identical to the first letter of the following word. 

// function is case insentive

function isSmooth(sentence) {
  let wordArr = sentence.split(' ');

  for (let i = 1; i < wordArr.length; i += 1) {
    let current = wordArr[i - 1];
    let next = wordArr[i];

    if (current[current.length - 1].toLowerCase() !== next[0].toLowerCase()) {
      return false;
    }
  }

  return true;
}

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids")); // true
console.log(isSmooth("Someone is outside the doorway")); // false
console.log(isSmooth("She eats super righteously")); // true