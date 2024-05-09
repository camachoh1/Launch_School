function swapCase(text) {
  if (text.length > 10) {
    return text.toUpperCase();
  } else {
    return text;
  }
}

console.log(swapCase('habla'));
console.log(swapCase("hello world"));
