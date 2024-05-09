// problem: given a list of ranges in a short-hand form, return a list of complete numbers.

// the short-hand form represents only the significant part of the next number for example: 

// range 1,3,7,2,4,1 is represents [1, 3, 7, 12, 14, 21]

// this is possible because numbers are always increasing: the short hand shows 2 after 7. Since numbers are always increasing, we assume that 2 represents 12 since 12 is the next number after 7 that includes a 2.

// in the example above, 4 follows 12, meaning the next number is 14. 1 follows 14 so the next number that includes a 1 is 21.

// there are 3 different separators: `-`, `:`, `..`

// input is given as a string containing number ranges separated by commas. 

// given the different ranges in short form, return the full range. 

//cant tell if the output should be a string or an array of numbers.

// examples:

// fullRange("1, 3, 7, 2, 4, 1") -> [1,3,7,12,14,21]

// fullRange("1-3, 1-2") -> [1,2,3,11,12] 

// ^^ multiple ranges can exist within the string. In such cases, each range is unfolded and concatenated. 

// fullRange("1:5:2") -> [1,2,3,4,5,6...12]

//^^ this case shows starting points being 1 and ending point being 5 for the first range. The second range starts from 5 and ends in 2 (12).

//fullRange("545, 64:11") -> [545, 564...611]

// ^^ this case shows that we can have a simple value and a range in the string.

// data structures: arrays

// splitting the input into arrays will allow me to iterate through every value in the string. The input should be split at the `,`

// iterate through the array if the value contains any of the separators, pass them into a function that will split the values further at the separator and create the range.

// if the value is not a range, pass them into the result array. 

// if a value is less than the last value in the result array, pass them into a function that will determine the next value that is greater than the last value in the input array that contains the candidate number

// the output is formatted in an array. 


function findNextNum(num1, num2) {

}

function createRange(range) {

}

function fullRange(ranges) {

}

console.log(fullRange("1, 3, 7, 2, 4, 1"));
// console.log(fullRange("1-3, 1-2"));
// console.log(fullRange("1:5:2"));
// console.log(fullRange("104-2"));
// console.log(fullRange("104-02"));
// console.log(fullRange("545, 64:11"));
// console.log(fullRange("1..3"));



