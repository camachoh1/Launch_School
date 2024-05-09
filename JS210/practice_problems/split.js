function splitString(str, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: No delimiter");
    return;
  }

  let resultStr = '';
  for (index = 0; index < str.length; index += 1) {
    if (str[index] === delimiter) {
      console.log(resultStr);
      resultStr = '';
    } else if (delimiter === '') {
        console.log(str[index]);
    } else {
      resultStr = resultStr + str[index];
    }
  }
  
  if (resultStr) {
    console.log(resultStr);
  }
}

splitString('abc,123,hello world', ',');
splitString('hello', ';');
splitString(';hello;', ';');
splitString('hello', '');