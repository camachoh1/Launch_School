let count = [1,2,3];

const pop = (array, value) => {
  if (array.length === 0) {
    return undefined;
  }

  let newLength = array.length - 1
  let removed = array[newLength];
  array.length = newLength;
  return removed;
};

console.log(pop(count));
console.log(count);