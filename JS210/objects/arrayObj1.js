const myArray = ['a', 'b', 'c'];

console.log(myArray[-1]);

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // d
console.log(myArray['e']); // 5
console.log(myArray); // [ 'a', 'b', 'c', 'f', '-1': 'd', e: 5 ]