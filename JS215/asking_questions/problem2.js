function thirdMax(arr) {
  if (arr.length === 0) return NaN;
  if (arr.length < 3) return Math.max(...arr);
  if (arr.every(num => num === arr[0])) return arr[0];

  let times = 3;
  let max = 0
  let filtered = arr.filter(n => typeof n === 'number' && !Number.isNaN(n));

  while (times > 0) {
    max = Math.max(...filtered);
    filtered = filtered.filter(el => el !== max);
    times -= 1;
  }

  return max;
}

console.log(thirdMax([1,2])) // 2
console.log(thirdMax([])) // 0

console.log(thirdMax([3,2,1])); // 1
console.log(thirdMax([1,2,3])); // 1
console.log(thirdMax([4,7,2,4])); // 2
console.log(thirdMax([12, 14, 45, 1])) // 12
console.log(thirdMax([1,-1,3])) // -1
console.log(thirdMax([2, 1, 0])) // 0

console.log(thirdMax(['a', true, 'c'])) // NaN
console.log(thirdMax([Infinity, -Infinity, 0])); // -Infinity
console.log(thirdMax([2,2,2]));



