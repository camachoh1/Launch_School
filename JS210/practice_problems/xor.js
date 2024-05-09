function isXor(val1,val2) {
  if (val1 && !val2) {
    return true
  } else if (!val1 && val2) {
    return true 
  }

  return false
}

// further exploration

function isXor(val1, val2) {
  return !!((val1 && !val2) || (!val1 && val2));
}
function isXor(val1, val2) {
  return Boolean(val1) !== Boolean(val2);
}


console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false