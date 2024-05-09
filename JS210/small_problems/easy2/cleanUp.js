function cleanUp(str) {
  let resultStr = '';

  for(let i = 0; i < str.length; i += 1) {
    if (str[i].match(/[a-zA-Z]/)) {
      resultStr += str[i];
    } else if (resultStr[resultStr.length - 1] !== ' ') {
      resultStr += ' ';
    }
  }
  console.log(resultStr);
}


cleanUp("---what's my +*& line?");    // " what s my line "