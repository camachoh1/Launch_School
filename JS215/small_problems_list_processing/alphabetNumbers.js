function wordSort(num1, num2) {
  const alphaNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  if (alphaNums[num1] > alphaNums[num2]) {
    return 1;
  } else if (alphaNums[num1] < alphaNums[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(arr) {
  return [...arr].sort(wordSort);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// const NUM_STRINGS = [
//   'zero', 'one', 'two', 'three', 'four', 'five',
//   'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//   'twelve', 'thirteen', 'fourteen', 'fifteen',
//   'sixteen', 'seventeen', 'eighteen', 'nineteen',
// ];

// function alphabeticNumberSort(array) {
//   return array.sort((a, b) => NUM_STRINGS[a] > NUM_STRINGS[b] ? 1 : -1);
// }

// const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
//                       'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
//                       'twelve', 'thirteen', 'fourteen', 'fifteen',
//                       'sixteen', 'seventeen', 'eighteen', 'nineteen'];

// function alphabeticNumberSort(arr) {
//   return arr.sort((a, b) => NUMBER_WORDS[a].localeCompare(NUMBER_WORDS[b]));
// }