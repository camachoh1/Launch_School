function binToNum(arr) {
  return parseInt(arr.join(''), 2);
}

console.log(binToNum([1,1,1,1]));