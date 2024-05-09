function swapName(name) {
  let nameArr = name.split(' ');
  return nameArr.reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"