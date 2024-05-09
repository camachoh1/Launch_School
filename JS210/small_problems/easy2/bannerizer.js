function drawLine(message) {
  let resultStr = '';

  for(let i = 0; i < message.length; i += 1) {
    resultStr += '-'
  }

  return resultStr;
}

function addSpaces(message) {
  let resultStr = '';

  for(let i = 0; i < message.length; i += 1) {
    resultStr += ' '
  }

  return resultStr;
}

function logInBox(message) {
  let topBottomLine = "+-" + drawLine(message) + "-+";
  let sideLines = '| ' + addSpaces(message) + ' |';
  
  console.log(topBottomLine);
  console.log(sideLines);
  console.log(`| ${message} |`);
  console.log(sideLines);
  console.log(topBottomLine);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');