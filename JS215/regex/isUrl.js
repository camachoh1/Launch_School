function isUrl(text) {
  if (text.match(/^https?:\/\/\S*$/)) {
    return true;
  } else {
    return false;
  }
}
  
console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false