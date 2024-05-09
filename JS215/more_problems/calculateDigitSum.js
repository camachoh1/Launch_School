// given a string and an integer `n`

// write a function that performs the following operations:

// 1. The input string must be divided into consecutive substrings `n` size. (the last group could be smaller than `n`)

// 2. sum every substring digit.

// 3. join the result from each substring sum into a single number string.

// continue the process until the resulting string is 'n' length. 

// return the resulting string.

// rules: 

// 'n' will always be a positive number > 0 
// the input string is less than 'n' return ''
// if the string is the same length as n return it as is.
// in this case the substrings are consecutive groups size of k.
// for example: '111112' k = 3 -> '111', '112'

// data structures: arrays, numbers, strings

// algorithm: 
// GOALS: create an array containing all posible group of characters from the input string size of n or less.

// divide each sub group and find its sum, join the result of the sum of every subgroup into a string.
// if the resulting string is greater than 'n' in lenght
// perform the operation again until the resulting string is 'n' length

// helper function: createGroups
// input: a string and a number
// output an array of substrings

// break the input string into an array of chars
// CREATE result []
// WHILE strArr LEN > 0
  // num = atrArr.splice(0, n).join('')
// result.push(num)
// END WHILE

// return result

// helper function: sum
// input a string
// output: a string

// break the input string into chars, transform each char into number
// add them together and return the result as string

//

// main function
// return '' if the input tring length is < n ||  n === 0
// if the string is completely made of 0s return a group size of n
// if the string is the same size of n return the string as is

// get all groups: helper function
// initialize result = by summing the groups and joining results as string

// while result.length !== n
// extract groups from result (helper function)
// update result (helper function)

// return result


function createGroups(str, n) {
  let strArr = str.split('');
  let result = [];

  while (strArr.length > 0) {
    let num = strArr.splice(0, n).join('');
    result.push(num);
  }
  return result;
}

function sum(str) {
  if (str.length === 1) return Number(str);

  return str.split('').map(Number).reduce((acc, sum) => {
    acc += sum
    return acc;
  }, 0);
} 

function digitSum(str, n) {
  if (str.length <= n || n === 0) return '';
  if (str.length === n) return str;
  if (str.split('').every(s => s === '0')) {
    return str.split('').splice(0, n).join('')
  }
  if (n === 1) return String(sum(str));

  let groups = createGroups(str, n);
  let result = groups.map(num => sum(num)).join('')

  while (result.length !== n) {
    groups = createGroups(result, n);
    result = groups.map(num => sum(num)).join('')
  }

  return result;
}



// test cases: 

console.log(digitSum('', 5)) // ''
console.log(digitSum('1112', 0)) // ''
console.log(digitSum('1', 5)) // ''

console.log(digitSum('1', 1)) // '1'
console.log(digitSum('123', 3)) // '123'
console.log(digitSum('111', 1)) // '3'
console.log(digitSum("123456", 2)) // 12 
console.log(digitSum('000000', 3)) // '000'
console.log(digitSum('11111222223', 3)) // '135'
console.log(digitSum('10002', 2)) // '135'
