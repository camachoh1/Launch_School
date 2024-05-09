function findOddNames(list) {
  let entries = list.filter(({firstName}) => {
    return nameScore(firstName) % 2 !== 0;
  });
  return entries;
}

function nameScore(name) {
  let asciiVal = name.split('').map(c => c.charCodeAt());
  return asciiVal.reduce((sum, num) => sum += num);
}

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

console.log(findOddNames(list1));