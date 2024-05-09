function forwardBackwards(arr) {
  return arr.concat(arr.slice().reverse());
}


let digits = [4, 8, 15, 16, 23, 42];
forwardBackwards(digits);