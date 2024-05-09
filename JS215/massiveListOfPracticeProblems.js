// function iterate(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i]);
//   }
// }

// function logAdd(el) { console.log(el + 1) };

// iterate([1,2,3,4,5], logAdd);

// let arr = [1,2,3,4,5];

// function isOdd(num) { return num % 2 === 1};

// let odds = arr.filter(isOdd)

// console.log(odds);

// the function isOdd is passed as argument to the invocation of filter. When a function is declared, a variable with the same name as the function is added to the scope. 


// let names = ['coco', 'taco', 'nata'];


// names.forEach((name, index, array) => console.log(name, index, array));

// forEach receives three arguments: element, index, array (the calling array). For each returns undefined, so in order to be useful forEach must have side effects to be useful. 


// replace

// let state = 'Mississippi';

// console.log(state.replace(/s/g, 'q'));


// // using `replace` with a simple regular expression to change every appearance of a character in a string. Without the regular expression, we would need to pass a string and only the first instance of that string will be replaced. The example above using a string would look like this:

// let state = 'Mississippi';

// console.log(state.replace('s', 'q'));

// substring

// let state = 'Mississippi';

// console.log(state.substring(3, 6)); // returns sis starting on indec 3 and stopping one before index 6. 

// exercises:

// let firstName = 'coleto';
// let lastName = 'mamaburra';

// let fullName = `${firstName} ${lastName}`;

// let language = 'JavaScript';

// let idx = language.indexOf('S');

// let charCode = language.charCodeAt(idx);

// let a = 'a';
// let b = 'b';

// console.log(a > b);

// b = 'B'

// console.log(a > b);

// console.log(language.slice(1, -1));
// console.log(language.slice(2, -1)); // slice treats negative values as the end of the string.

// let fact1 = 'JavaScript is fun';
// let fact2 = 'Kids like it too';

// let compoundSentence = `${fact1} and ${fact2.toLowerCase()}`;

// console.log(fact1[0], fact2[0]);

// let pi = 22 / 7;

// let idx = pi.toString().lastIndexOf('14');

// console.log(idx);

// // let boxNumber = 365.toString(); // JS interprets the period aftet the number as a decimal point, not a method separator. This is why an error is thrown. A way to solve this problem is by using two periods after the number or parentheses :

// // let boxNumber = 365..toString();
// let boxNumber = (365).toString();

// console.log(typeof Number.parseInt(boxNumber, 10));

// console.log(typeof String(boxNumber));


// function greeter() {
//   let input = require('readline-sync');
//   let name = input.question('What is your name? ');

//   if (name.indexOf('!') < 0) {
//     console.log(`Hello ${name}`);
//   } else {
//     console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
//   }
// }

// greeter();

// problem:

// write a function that takes a string as argument and returns true if the string contains properly balanced parentheses, false otherwise. p

// rules: properly balanced parentheses contain ( and ) in matching pairs.
// a properly balanced parentheses always starts with (

// input: a string
// output: a boolean

// test cases:
  // isBalanced('(one, (two))') // true
  // isBalanced('(welcome to the world)') // true
  // isBalanced('hello') // true
  // isBalanced(')break a leg!(') // false
  // isBalanced('((hello world)') // false
  // isBalanced('(running)(') // false
  // isBalanced("") // false

// data structures: 
  // strings and numbers
  // numbers are used to keep track of the parentheses

// algorithm: 
  // return false if the input string is empty or if the first character in the string is a ')'
  // initialize a counter to 0.
  // iterate through the string using a for loop:
    // use the incrementer to access the index of each character in the string
    // if the character at the current index is (
      // the counter is incremented by one
    // else 
      // the counter is decremented by one
  // at the end of the iteration return true if the counter is 0
  // else false


// function isBalanced(str) {
//   if (str === "" || str[0] === ')' || str[str.length -1] === '(') {
//     return false;
//   }

//   let count = 0;

//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === '(') {
//       count += 1;
//     } else if (str[i] === ')') {
//       count -= 1;
//     }
//   }

//   return count === 0 ? true : false;
// }

// // console.log(isBalanced('(one, (two))')); // true
// // console.log(isBalanced('(welcome to the world)')); // true
// // console.log(isBalanced('hello')); // true
// // console.log(isBalanced(')break a leg!(')); // false
// // console.log(isBalanced('((hello world)')); // false
// // console.log(isBalanced('(running)(')); // false
// // console.log(isBalanced("")); // false

// console.log(isBalanced('What (is) this?'));        // true
// console.log(isBalanced('What is) this?'));         // false
// console.log(isBalanced('What (is this?'));         // false
// console.log(isBalanced('((What) (is this))?'));    // true
// console.log(isBalanced('((What)) (is this))?'));   // false
// console.log(isBalanced('Hey!'));                   // true
// console.log(isBalanced(')Hey!('));                 // false
// console.log(isBalanced('What ((is))) up('));       // false



// sentiment analysis

// let textExcerpt = 'To be or not to be-that is the question:\n' +
//   'Whether \'tis nobler in the mind to suffer\n' +
//   'The slings and arrows of outrageous fortune,\n' +
//   'Or to take arms against a sea of troubles,\n' +
//   'And, by opposing, end them. To die, to sleep-\n' +
//   'No more-and by a sleep to say we end\n' +
//   'The heartache and the thousand natural shocks\n' +
//   'That flesh is heir to-\'tis a consummation\n' +
//   'Devoutly to be wished. To die, to sleep-\n' +
//   'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
//   'For in that sleep of death what dreams may come,\n' +
//   'When we have shuffled off this mortal coil,\n' +
//   'Must give us pause. There\'s the respect\n' +
//   'That makes calamity of so long life.\n' +
//   'For who would bear the whips and scorns of time,\n' +
//   'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
//   'The pangs of despised love, the law’s delay, [F: disprized]\n' +
//   'The insolence of office, and the spurns\n' +
//   'That patient merit of the unworthy takes,\n' +
//   'When he himself might his quietus make\n' +
//   'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
//   'To grunt and sweat under a weary life,\n' +
//   'But that the dread of something after death,\n' +
//   'The undiscovered country from whose bourn\n' +
//   'No traveler returns, puzzles the will\n' +
//   'And makes us rather bear those ills we have\n' +
//   'Than fly to others that we know not of?\n' +
//   'Thus conscience does make cowards of us all,\n' +
//   'And thus the native hue of resolution\n' +
//   'Is sicklied o\'er with the pale cast of thought,\n' +
//   'And enterprises of great pitch and moment, [F: pith]\n' +
//   'With this regard their currents turn awry, [F: away]\n' +
//   'And lose the name of action.-Soft you now,\n' +
//   'The fair Ophelia.-Nymph, in thy orisons\n' +
//   'Be all my sins remembered';



// const POSITIVE_WORDS = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
// const NEGATIVE_WORDS = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

// function sentiment(text) {
//   let sentences = text.toLowerCase().match(/[a-z']+/g);
//   let wordsArr = sentences.map(sentence => sentence.split(' '));
//   let negativeSentiment = [];
//   let positiveSentiment = [];

//   wordsArr.forEach(subArr => {
//     subArr.forEach(word => {
//       if (POSITIVE_WORDS.includes(word)) {
//         positiveSentiment.push(word);
//       } else if (NEGATIVE_WORDS.includes(word)) {
//         negativeSentiment.push(word);
//       }
//     });
//   });
  
//   console.log(`There are ${positiveSentiment.length} positive words in the text.\nPositive sentiments: ${positiveSentiment.join(', ')}`);

//   console.log(`There are ${negativeSentiment.length} negative words in the text.\nPositive sentiments: ${negativeSentiment.join(', ')}`);

//   if (negativeSentiment.length > positiveSentiment.length) {
//     console.log('The sentiment of the text is negative');
//   } else {
//     console.log('The sentiment of the text is positive');
//   }
// }

// sentiment(textExcerpt);


// function isUppercase(str) {
//   return str.split('').every(s => s === s.toUpperCase());
// }

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true


// function removeVowels(arr) {
//   return arr.map(str => str.replace(/[aeiou]/gi, ''));
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


// function letterCaseCount(str) {

//   let lowercase = str.match(/[a-z]/g) || [];
//   let uppercase = str.match(/[A-Z]/g) || [];
//   let neither = str.match(/[^a-z]/ig) || [];

//   return {
//     lowercase: lowercase.length, 
//     uppercase: uppercase.length, 
//     neither: neither.length,
//   }
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// // console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// function wordCap(str) {
//   let wordArr = str.split(' ');
//   return wordArr.map(word => {
//       return word[0].toUpperCase() + word.slice(1);
//   }).join(' ');
// }

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

// function swapCase(str) {
//   return str.split('').map(char => {
//     if (char.match(/[a-z]/)) {
//       return char.toUpperCase();
//     } else if (char.match(/[A-Z]/)) {
//       return char.toLowerCase();
//     } else {
//       return char;
//     }
//   }).join('');
// }

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

// function staggeredCase(str) {
//   return str.split('').map((char, index) => {
//     if (index % 2 === 0) {
//       return char.toUpperCase();
//     } else {
//       return char;
//     }
//   }).join('');
// }

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"


// function staggeredCase(str) {
//   let needUpper = true;
//   let newChar;

//   return str.split('').map(char => {
//     if (char.match(/[a-z]/i)) {
//       if (needUpper) {
//         newChar = char.toUpperCase();
//       } else {
//         newChar = char.toLowerCase();
//       }
//       needUpper = !needUpper;
//       return newChar;
//     } else {
//       return char;
//     }
//   }).join('');
// }

// function isAlphabetic(str) {
//   return /[a-z]/i.test(str);
// }

// function staggeredCase(str) {
//   let needUpper = false;

//   return [...str].map(char => {
//     if (isAlphabetic(char)) needUpper = !needUpper;
//     return needUpper ? char.toUpperCase() : char.toLowerCase();
//   }).join('');
// }


// console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
// console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
// console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"

// function wordLengths(str) {
//   if (str === '' || str === undefined) {
//     return []; 
//   }

//   return str.split(' ').map(word => {
//     return `${word} ${word.length}`;
//   });
// }

// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';


// // function searchWord(word, text) {
// //   let reg = new RegExp(`\\b${word}\\b`, 'gi')
  
// //   // return text.split(' ').map(word => {
// //   //   if (word.match(reg)) {
// //   //     return "**" + word.toUpperCase() + "**"
// //   //   } else {
// //   //     return word;
// //   //   }
// //   // }).join(' ');

// //   return text.replace(reg, `**${word.toUpperCase()}**`);
// //   // return matches ? matches.length : 0;
// // }

// // console.log(searchWord('sed', text));      // 3

// problem: 

// write a program that takes one argument: a number that represents the total number of switches and returns an array of the lights that are on after n repetitions.

// rules: 
  // all lights are initially off
  // on the first pass all lights are turned on
  // on the second pass lights 2,4,6,8, and so on are toggled.
  // on the third pass, lights 3,6,9,12, and so on are toggled.
  // this process continues until n repetitions are completed.

// input: an integer
// output: an array with the number of lights that are on at the end of the process. 

// lightsOn(5)
    // [off, off, off, off, off]
    // [on, on, on, on, on]
    // [on, off, on, off, on]
    // [on, off, off, off, on]
    // [on, off, off, on, on]
    // [on, off, off, on, off]
    // [1, 4] 
    // notice that the lights array is not 0 based, the first light is 1

//data structures: arrays, booleans (representing the lights)

// algorithm:
  // create array of lights (helper function)
    // use the input array in order to push booleans (false === off) into an empty array
    // return the array with the objects

  // using an iterator, iterate n number of times through the array of switches
    // the incrementer must start with 1 and iteration should go until the incrementer is === n
    // if the index of the current element is % of the incrementer
      // the current element is switched
    
  // extract the index of the elements that are "on"
  // return them in an array



// function lightsOn(switches) {
//   let lightsArr = createLights(switches);
//   let toggledLights = toggleLights(switches, lightsArr);
//   let result = formatResult(toggledLights);
//   return result;
// }

// function createLights(switches) {
//   return new Array(switches).fill(false);
// }

// function toggleLights(switches, arr) {
//   let round = 1;

//   while (round <= switches) {
//     for (let i = 0; i <= switches; i += 1) {
//       if (i % round === 0) {
//         arr[i] = !arr[i];
//       }
//     }
//     round += 1;
//   }
//   return arr
// }

// function formatResult(arr) {
//   return arr.map((el, index) => {
//     if (el) {
//       return index;
//     }
//   }).filter(el => el);
// }



// console.log(lightsOn(100))


// problem: 

// Write a function that displays a four-pointed diamond in an n x n grid where n is an odd integer.

// input: an integer
// output: logs a diamond

// rules: 
  // the input integer is always an odd number 
  // the diamond is made of stars and spaces
  // at its widest point, the diamond is n size
  // at its smallest point the diamond is made of a single star and the remaining spaces make a width total n
  // the bottom part of the diamond is completed by repeating the pattern in reverse
  
  // input 3:
    // '' * '' total 3
    //   ***   total 3 widest point
    // '' * '' total 3

  // input 5:
    // ''''*
    // ''* * *
    // * * * * *

// data structures: strings, numbers, arrays

// algorithm: 
  // declare and initialize an increment variable to 2. 
  // create the pattern using numbers in an array
  // using a for loop
    // start the incrementer to 1 iterate until the incrementer is < 0
    // increment by the incrementer value
    // push each number into the pattern array
    // once i === n
      // reasign the incrementer to -2
    
    // iterate through the pattern array
    // use repeat() to log the number of spaces and stars 

// function diamond(n) {
//   if (n % 2 === 0) return "invalid";
//   let stars = createPattern(n);
//   drawDiamond(stars, n);
// }

// function createPattern(n) {
//   let increment = 2;
//   let pattern = [];

//   for (let i = 1; i > 0; i += increment) {
//     pattern.push(i);

//     if (i === n) {
//       increment = -2;
//     }
//   }
//   return pattern;
// }

// function drawDiamond(pattern, n) {
//   pattern.forEach(stars => {
//     console.log(' '.repeat(n - stars / 2) + '*'.repeat(stars));
//   });
// }

// console.log(diamond(5));


// const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                        { id: 105, movement: 'in',  quantity: 10 },
//                        { id: 102, movement: 'out', quantity: 17 },
//                        { id: 101, movement: 'in',  quantity: 12 },
//                        { id: 103, movement: 'out', quantity: 15 },
//                        { id: 102, movement: 'out', quantity: 15 },
//                        { id: 105, movement: 'in',  quantity: 25 },
//                        { id: 101, movement: 'out', quantity: 18 },
//                        { id: 102, movement: 'in',  quantity: 22 },
//                        { id: 103, movement: 'out', quantity: 15 }, ];


// // function transactionsFor(id, transactions) {
// //   return transactions.filter(obj => {
// //     return obj['id'] === id
// //   });
// // }

// function sum(num) {
//   return String(num)
//     .split('')
//       .map(Number)
//         .reduce((sum, num) => sum += num, 0);
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45


// problem: write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number: 

// rules:
  // do not mutate the argument
  // the input array will always contain two or more integers
  // the array must be sorted based on the english word for each number
  // the numbers range from 0 to 19

// test cases:
  // alphabeticNumberSort([1,2,3]) // [1, 3, 2];
  // alphabeticNumbersort([9,12,3,5]) // [5, 9, 3, 12]
  // alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

   // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// function alphabeticSort(num1, num2) {
//   const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

//   if (NUM_WORDS[num1] > NUM_WORDS[num2]) {
//     return 1;
//   } else if (NUM_WORDS[num1] < NUM_WORDS[num2]) {
//     return -1
//   } else {
//     return 0;
//   }
// }

// function alphabeticNumberSort(arr) {
//   return [...arr].sort(alphabeticSort);
// }

// console.log(alphabeticNumberSort([1,2,3])) // [1, 3, 2];
// console.log(alphabeticNumberSort([9,12,3,5])) // [5, 9, 3, 12]
// console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

//    // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// function multiplyAllPairs(arr1, arr2) {
//   let result = [];
//   arr1.forEach(n1 => {
//     arr2.forEach(n2 => {
//       result.push(n1 * n2);
//     }) 
//   })

//   console.log(result.sort((a, b) => a - b));
// }

// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// function sumOfSums(arr) { 
//   let subSequence = [];

//   for(let len = 1; len <= arr.length; len += 1) {
//     subSequence.push(arr.slice(0, len).reduce((sum, num) => sum += num));
//   }

//   return subSequence.reduce((sum, num) => sum += num)
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


// function leadingSubstrings(str) {
//   return str.split('').map((_, index) => {
//     return str.slice(0, index + 1);
//   });
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// function substrings(str) {
//   let substr = [];

//   for (let start = 0; start <= str.length; start += 1) {
//     for (let end = 1; end <= str.length; end += 1) {
//       substr.push(str.slice(start, end));
//     }
//   }

//   return substr.filter(s => s);
// }

// console.log(substrings('abcde'));

// problem: 
// write a function that cleans up a user-entered phone number so it can be sent as SMS. The number may contain special characters such as spaces, dash dots, and parentheses that should be ignored

// rules: 
  // if the number is < 10 digits it is a bad number
  // if the number is > 10 digits and the first digit is not 1 it is a bad number
  // if the number is > 10 digits and the first digit is 1 remove the 1 and return the number

  // return a string of 0s if the number is bad, else return the number as a string

// test cases:
  // cleanPhoneNumber('(234)-456-5988') // 2344565988
  // cleanPhoneNumber('123 456 7890') // 1234567890
  // cleanPhoneNumber('2(234)_456_1234') // 0000000000
  // cleanPhoneNumber('123') // 00000000000
  // cleanPhoneNumber('1234567890') // 1234567890
  // cleanPhoneNumber('1(234) 456 7890) // 234456789

// DS: 
  // arrays 

// algorithm:
  // MATCH digits from the string using regex
  // JOIN the array of digits back into a string
  // CHECK IF the length of the string is 10 if so, return
    // ELIF string > 10 && string[0] === 1
     // RETURN string SLICED from index 1
    // ELSE 
      //RETURN 00000000
    // END IF
  // RETURN

// function cleanPhoneNumber(str) {
//   let cleanNum = str.match(/[0-9]/g).join('')
  
//   if (cleanNum.length === 10) {
//     return cleanNum;
//   } else if (cleanNum.length > 10 && cleanNum[0] === '1') {
//     return cleanNum.slice(1);
//   } else {
//     return '0000000000';
//   }
// }

// console.log(cleanPhoneNumber('(234)-456-5988')); // 2344565988
// console.log(cleanPhoneNumber('123 456 7890')); // 1234567890
// console.log(cleanPhoneNumber('2(234)_456_1234')); // 0000000000
// console.log(cleanPhoneNumber('123')); // 00000000000
// console.log(cleanPhoneNumber('1234567890')); // 1234567890
// console.log(cleanPhoneNumber('1(234) 456 7890')); // 2344567890


// problem: write a function that rotates an array by moving the first element ot the end of the array. 

// do not modify the original array

// rules: 

// if the input is not an array, return undefined
// if the input is an empty array, return an empty array.

// test cases:

// rotateArray({a: 1}) // undefined
// rotatearray([]) // []

// rotateArray([{a:1}, {b:2}]) // [{b: 2}, {a: 1}]
// rotateArray([1,2,3,4,5]) // [2,3,4,5,1]
// rotateArray([1]) // [1]
// rotateArray([{a: 1}, 4, {b: 2}]) // [4, {b:2}, {a: 1}] 

// const arr = [1,2,3,4]
// rotateArray(arr); // [2,3,4,1]
// console.log(arr) // [1,2,3,4]

// data structures: arrays

// algorithm:
// GOAL: create a copy of the input array.
// this copy is sliced from index 1
// push the first element from the original array in the copy and return

// main function: rotateArray

// INITIALIZE slicedArr = SLICE arr from index 1
// PUSH the value arr[0] into arr
// RETURN slicedArr

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) return undefined;

//   if (arr.length === 0) return [];
//   let slicedArr = arr.slice(1);
//   slicedArr.push(arr[0]);
//   return slicedArr;
// }

// console.log(rotateArray({a: 1})); // undefined
// console.log(rotateArray([])); // []

// console.log(rotateArray([{a:1}, {b:2}])); // [{b: 2}, {a: 1}]
// console.log(rotateArray([1,2,3,4,5])); // [2,3,4,5,1]
// console.log(rotateArray([1])); // [1]
// console.log(rotateArray([{a: 1}, 4, {b: 2}])); // [4, {b:2}, {a: 1}] 

// const arr = [1,2,3,4]
// rotateArray(arr); // [2,3,4,1]
// console.log(arr) // [1,2,3,4]

// problem: write a function that rotates the las n digits of a number. 

// rules: For the rotation, rotate by one digit to the left, moving the first digit to the end. 

// 123, 2 => 23 => 32 => 132

// data structures: arrays, strings

// algorithm:
// GOALS: turn the input number into a string and then an array.
// slice the array at the point length - n
// pass in the sliced array into rotate array
// join the return value of rotate array
// join the rotated string with the input array from 0 up to slice point. 
// turn the strings into numbers and return.

// function rotateRightmostDigits(num, n) {
//   let numArr = String(num).split('');
//   let slicePoint = numArr.length - n;
//   let firstSlice = numArr.slice(0, slicePoint);
//   let secondSlice = numArr.slice(slicePoint);
//   let rotated = rotateArray(secondSlice);
//   let result = firstSlice.concat(rotated).join('');
//   return Number.parseInt(result, 10);
// }


// // console.log(rotateRightmostDigits(735291, 1));      // 735291
// // console.log(rotateRightmostDigits(735291, 2));      // 735219
// // console.log(rotateRightmostDigits(735291, 3));      // 735912
// // console.log(rotateRightmostDigits(735291, 4));      // 732915
// // console.log(rotateRightmostDigits(735291, 5));      // 752913
// // console.log(rotateRightmostDigits(735291, 6));      // 352917

// function maxRotation(num) {
//   let rounds = String(num).length;
//   let result = num;

//   while (rounds > 1) {
//     result = rotateRightmostDigits(result, rounds);
//     rounds -= 1;
//   }

//   console.log(result);
// }

// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845

// const NUM_WORDS = {'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};

// function wordToDigit(sentence) {
//   Object.keys(NUM_WORDS).forEach(word => {
//     let regex = new RegExp('//b' + word + '//b', 'g');

//     sentence = sentence.replace(regex, NUM_WORDS[word]);
//   });

//   return sentence;
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// // "Please call me at 5 5 5 1 2 3 4. Thanks."

// function isUrl(string) {
//   return /^https?:\/\/\w+\.\w{3}$/.test(string);
// }

// console.log(isUrl('http://launchschool.com'));   // -> true
// console.log(isUrl('https://example.com'));       // -> true
// console.log(isUrl('https://example.com hello')); // -> false
// console.log(isUrl('   https://example.com'));    // -> false

// function fields(str) {
//   return str.split(/[ \t,]+/);
// }

// console.log(fields("Pete,201,Student"));
// // -> ['Pete', '201', 'Student']

// console.log(fields("Pete \t 201    ,  TA"));
// // -> ['Pete', '201', 'TA']

// console.log(fields("Pete \t 201"));
// // -> ['Pete', '201']

// console.log(fields("Pete \n 201"));
// // -> ['Pete', '\n', '201']

// function mysteryMath(str) {
// return str.replace(/[+\-*\/]/g, '?');
// }

// console.log(mysteryMath('4 + 3 - 5 = 2'));
// // -> '4 ? 3 - 5 = 2'

// console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// // -> '(4 ? 3 + 2) / 7 - 1 = 1'

// function danish(str) {
//   return str.replace(/\b(apple|blueberry|cherry)\b/, "danish");
// }

// console.log(danish('An apple a day keeps the doctor away'));
// // -> 'An danish a day keeps the doctor away'

// console.log(danish('My favorite is blueberry pie'));
// // -> 'My favorite is danish pie'

// console.log(danish('The cherry of my eye'));
// // -> 'The danish of my eye'

// console.log(danish('apple. cherry. blueberry.'));
// // -> 'danish. cherry. blueberry.'

// console.log(danish('I love pineapple'));
// // -> 'I love pineapple'

// function formatDate(str) {
//   console.log(str.replace(/\-/g, '.'))
// }

// formatDate('2016-06-17'); // -> '17.06.2016'
// formatDate('2016/06/17'); // -> '2016/06/17' (no change)

// function triangle(side1, side2, side3) {
//   let sides = [side1, side2, side3].sort();
//   if (!validTriangle(sides)) return "invalid";

//   if (sides.every(side => side === sides[0])) {
//     return "equilateral";
//   } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
//     return 'isosesles';
//   } else {
//     return 'escalene';
//   }
// }

// function validTriangle(sides) {
//   return ((sides[0] + sides[1]) > sides[2]) && (sides.every(side => side > 0));
// }

// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"

// function triangle(...angles) {
//   if (!validTriangle(angles)) return "invalid";

//   if (angles.some(angle => angle === 90)) {
//     return 'right'
//   } else if (angles.every(angle => angle < 90)) {
//     return "acute";
//   } else {
//     return "obstuse"
//   }
// }

// function validTriangle(angles) {
//   return angles.reduce((sum, num) => sum += num, 0) === 180 && angles.every(angle => angle > 0);
// }

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"


// function createLights(n) {
//   return new Array(n).fill(false);
// }

// function toggleLights(n, lights) {
//   let round = 1;

//   while (round < n) {
//     for (let i = 0; i < n; i += 1) {
//       if (i % round === 0) {
//         lights[i] = !lights[i];
//       }
//     }
//     round += 1
//   }

//   return lights;
// }

// function formatResult(lights) {
//   return lights.map((light, index) => {
//     if (light) {
//       return index;
//     }
//   }).filter(light => light);
// }

// function lightsOn(n) {
//   let lights = createLights(n);
//   let toggled = toggleLights(n, lights);
//   let result = formatResult(toggled);
//   return result;
// }

// console.log(lightsOn(100));

// function diamond(n) {
//   let pattern = createPattern(n);
  
//   pattern.forEach(num => {
//     console.log(" ".repeat(n - num / 2) + '*'.repeat(num))
//   });
// }

// function createPattern(n) {
//   let result = [];
//   let increment = 2;
//   for (let i = 1; i > 0; i += increment) {
//     result.push(i);

//     if (i === n) {
//       increment = -increment;
//     }
//   }

//   return result;
// }

// console.log(diamond(5))



// A distinct string is a string that is present only once in an array.

// Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the result string is the one encountered earliest in the array...

// problem: given an array and a number n write a function that finds and return the nth distinct string found in the input array.

// rules: 
// a distinct string is a string that is present only once in the array. 
// if the array contains fewer than n strings return ""
// if the array is empty ""
// if the array is sparse, then ignore the empty spaces. 
// I will assume that the inputs will always be an array and a positive integer.
// could empty strings be considered distinct?
// what if the values are any other type of primitives other than strings? booleans, null, undefined, numbers? 
// if n is a negative number return?


// distinctString([], 1) // ""
// distinctString(['a', 'b' 'b'], 2) // ""

// distinctString(['a','a','b', 'c', 'c', 'd'], 2) // 'd'
// distinctString(['a', 'b',, 'c', 'b', 'd'], 1) // 'a'
// distinctString(['a', 'b', 'c', 'd', 'e', 'e'], 2) // 'b'
// distinctSting([null, null, false, false,,undefined, 1], 2) // 1


// data structures: objects, arrays 

// algorithm:
// GOALS: count the frequency of each element present in the array using an object whose keys will be the elements and the values will be the number of times the element is found in the array. 
// select the entries in the object that have a value of 1
// if the number of selected entries is < n return ""
// return the nth entry's key

// helper function: frequencyCounter
// input an array
// output: object

// CREATE result object
// ITERATE through the input array
  // IF !resultObj[element]
    // resultObj[element] = 0
  // END IF
  // resultObj[element] += 1
// END ITERATION

// RETURN resultObj

// main function: 
// IF arr LEN === 0 RETURN ""

// INILIZE countObj = frecuencyCounte(arr);
// EXTRACT the entries from the object
// FILTER the entries
  // IF entry[1] === 1
    // select entry
  // END IF
// END FILTER

// IF filteredEntries LEN < n
  // RETURN ""
// ELSE 
  // RETURN entries[n -1][0]
// END IF


// function frequencyCounter(arr) {
//   let resultObj = {};

//   arr.forEach(el => {
//     if (!resultObj[el]) {
//       resultObj[el] = 0;
//     }

//     resultObj[el] += 1
//   });

//   return resultObj
// }

// function distinctString(arr, n) {
//   if (arr.length === 0) return "";

//   let countObj = frequencyCounter(arr);
//   let entries = Object.entries(countObj);
//   let filteredEntries = entries.filter(entry => {
//     return entry[1] === 1;
//   });

//   if (filteredEntries.length < n) {
//     return "";
//   } else {
//     return filteredEntries[n - 1][0]
//   }
// }


// console.log(distinctString([], 1)) // ""
// console.log(distinctString(['a','a', 'b', 'b', 'c', 'c'], 2)) // ""
// console.log(distinctString(['a', 'b', 'b'], 2)) // ""
// console.log(distinctString(['a','a','b', 'c', 'c', 'd'], 2)); // 'd'
// console.log(distinctString(['a', 'b',, 'c', 'b', 'd'], 1)); // 'a'
// console.log(distinctString(['a', 'b', 'c', 'd', 'e', 'e'], 2)); // 'b'
// console.log(distinctString([null, null, false, false,,undefined, true], 2)); // true

// Given an array of integers, nums, return the third largest number in the array. If the third largest number does not exist, return the greatest number.

// input: array
// output: number

// rules: 
// You are not allowed to sort the array.
// if we receive an empty array return 0
// negative numbers and 0 are valid numbers in the array
// Infinity and -Inifinity are valid values.
// the array could contain NaN values or any other primitive data types. 
// the order of the array does not matter.
// assume that the function will always receive one array
// if the input array has less than 3 elements return the highest value
// if the input is a sparse array ignore the empty values
// the function finds the max distinct value. 

// test cases:
  // thirdMax([]) // 0
  // thirdMax([1,2,]) // 2
  
  // thirdMax([1,4,,5]) // 1
  // thirdMax([1,2,5,5,5]) // 1
  // thirdMax([0, 1, 2]) // 0
  // thirdMax([Infinity, 3, -Infinity]) // -Infinity
  // thirdMax([1, 3, 5, NaN, 1]) // 1
  // thirdMax([-1, 0, 1]) // -1
  // thirdMax([12.1, 'a', null, 2, undefined, 1]) // 1

  // data structures: arrays,

  // algorithm: 
  // GOALS: first extract all the distinct values from the array using sets
  // filter our the distinct elements to only contain valid numbers.

  // create a filtered variable initialized to the input array
  // create times variable initialized to 3
  // create a max variable initialized to 0

  // while times > 0
  // extranct the max of filtered
  // filter filtered from the max value
  // return max


// function thirdMax(arr) {
//   if (arr.length === 0) return 0;

//   let distinctValues = [...new Set(arr)]
//   let validNums = distinctValues.filter(el => {
//     return typeof el === 'number' && String(el) !== 'NaN'
//   });

//   if (validNums.length < 3) return Math.max(...validNums);
//   let rounds = 3;
//   let max = 0;
//   let filtered = validNums;

//   while (rounds > 0) {
//     max = Math.max(...filtered);
//     filtered = filtered.filter(num => num !== max);
//     rounds -= 1
//   }

//   return max;
// }


// console.log(thirdMax([])); // 0
// console.log(thirdMax([1,2])); // 2
// console.log(thirdMax([1,4,,5])); // 1
// console.log(thirdMax([1,2,5,5,5])); // 1
// console.log(thirdMax([0, 1, 2])); // 0
// console.log(thirdMax([Infinity, 3, -Infinity])); // -Infinity
// console.log(thirdMax([1, 3, 5, NaN, 1])); // 1
// console.log(thirdMax([-1, 0, 1])); // -1
// console.log(thirdMax([12.1, 'a', null, 2, undefined, 1])); // 1

// problem: given a string containing numbers and other characters. write a function that returns an array containing all prime number substrings in the input string. 

// input: a string
// output: an array

// rules:
// the string may contain alphabetic characters with both uppercase and lowercase characters. As well as special character and numbers. 
// the input string may contain more than one word.
// if the string does not include any numbers or if it contains numbers but none of them aree prime numbers. return []
// if the input is "" return []
// the string may contain negative numbers
// would 123 be considered a number o would it be 1, 2, 3 or 12, 23. 123 is considered a number. 
// if the input is any other datatype return null
// assume the function will always receive a single argument

// test cases:
// primeNumberPrinter("") // []
// primeNumberPrinter("a1A@4") // []
// primeNumberPrinter("1") // []
// primeNumberPrinter() // null
// prineNumberPrinter(null) // null
// primeNumberPrinter(1) // null
// primeNumberPrinter([]) // null
// primeNumberPrinter("2") // [2]
// primeNumberPrinter("a4b#2&13C7") // [2, 13, 7]
// primeNumberPrinter("oP-7I0123M113") // 

// Data structures: arrays, numbers

// algorithm: 
// GOALS: extract all number values from the string. 
// filter out the numbers that are not prime from the extracted numbers.
// return the list of prime numbers

// helper function: isPrime
// input: number
// output: boolean 

// IF num <= 1 
  // RETURN false
// END IF

// ITERATE (for loop) i = 2
  // i < num
    // IF num % i === 0 
      // RETURN false
    // END IF
// END FOR
// RETURN true 

// main function: primeNumberPrinter

// IF typeof input !string return null
// IF string === '' return []

// EXTRACT numbers from string use match regex /-?[0-9]+/g
// FILTER numArr
  // IF isPrime(num)
    // select
  // END IF
// END FILTER

// RETURN filteredArr

// function primeNumberPrinter(str) {
//   if (typeof str !== 'string') return null;
//   if (str === '') return [];

//   let numArr = str.match(/-?[0-9]+/g)
//   if (!numArr) return [];
//   numArr = numArr.map(Number);
  
//   return numArr.filter(num => isPrime(num));
// }

// function isPrime(num) {
//   if (num <= 1) return false

//   for (let i = 2; i < num; i += 1) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// console.log(primeNumberPrinter("")); // []
// console.log(primeNumberPrinter("a1A@4")); // []
// console.log(primeNumberPrinter("1")); // []
// console.log(primeNumberPrinter()); // null
// console.log(primeNumberPrinter(null)); // null
// console.log(primeNumberPrinter(1)); // null
// console.log(primeNumberPrinter([])); // null
// console.log(primeNumberPrinter("2")); // [2]
// console.log(primeNumberPrinter("a4b#2&13C7")); // [2, 13, 7]
// console.log(primeNumberPrinter("oP-7I0123M113")); // [113] 

// problem: given a 2D array, return a flatten array with all duplicates removed. 

// rules: 
// numbers and strings are treated as duplicates: 1 === '1'.
// the output keeps the element that appears first.
// if the sub array is empty return []
// the sub arrays could be of any size.
// the array will contain any primitive data types. 
// the input array may be sparse if that is the case just ignore the empty elements. 
// '1a' === 1 ? no they are not the same.
// if one sub array is empty just, flatten the array and remove duplicates if any exist


// test cases: 
  // flattenAndUnique([[]]) //  []
  // flattenAndUnique([]) // []
  // flattenAndUnique() // null
  // flattenAndUnique([[], [1,1,2,2,3]]) // [1,2,3]
  // flattenAndUnique([null], [null],,) // [null]
  // flattenAndUnique([false, 1, 2,], ['2', true, null]) // [false, 1, 2, true, null] 
  // flattenAndUnique([false, 1, '2',], [2, true, null]) // [false, 1, '2', true, null] 
  // flattenAndUnique([[1,2,,'a'], [2,'e','4'], [4, 4]]) // [1,2,'a','e','4']

  // data structure: arrays

  // algorithm: 
  // GOALS: flatten the input array
  // retrun null if the input is not an array
  // return [] if the flatten arr is empty
  // create an array tha keeps track of the seen elements.
  // create a results array

  // iterate through the array
  // create a candidate variable
    // if the current value is a number transform into a string and assign to cadidate.
    // else assign the current value as candidate.
  // check if the current candidate does not exist in the seen array
  // if that is the case
  // add the current candidate to seen
  // add the current element to result

// function flattenAndUnique(arr) {
//   if (!Array.isArray(arr)) return null;

//   let flatArr = arr.flat();
//   if (flatArr.length === 0) return [];

//   let seen = [];
//   let result = [];

//   flatArr.forEach(el => {
//     let candidate = typeof el === 'number' ? String(el) : el;

//     if (seen.indexOf(candidate) === -1) {
//       seen.push(candidate);
//       result.push(el)
//     }
//   });

//   return result;
// }


// console.log(flattenAndUnique([[]])); //  []
// console.log(flattenAndUnique([])); // []
// console.log(flattenAndUnique()); // null
// console.log(flattenAndUnique([[], [1,1,2,2,3]])); // [1,2,3]
// console.log(flattenAndUnique([[null], [null],,[]])); // [null]
// console.log(flattenAndUnique([[false, 1, 2,], ['2', true, null]])); // [false, 1, 2, true, null] 
// console.log(flattenAndUnique([[false, 1, '2',], [2, true, null]])); // [false, 1, '2', true, null] 
// console.log(flattenAndUnique([[1,2,,'a'], [2,'e','4'], [4, 4]])); // [1,2,'a','e','4']

// problem: write a function that takes a string and doubles each character in the string, and returns the result as a new string.

// function repeater(string) {
//   if (string === '') return '';

//   let result = '';

//   string.split('').forEach(char => {
//     if (char.match(/[^aeiou0-9/\s/\W]/i)) {
//       result += char.repeat(2);
//     } else {
//       result += char;
//     }
//   });

//   return result;
// }

// console.log(repeater('String'))
// console.log(repeater('Hello-World!'));
// console.log(repeater('July 4th'))


// function reverseNumber(num) {
//   return Number(String(num).split('').reverse().join(''));
// }

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
// console.log(reverseNumber(1));        // 1


// function centerOf(string) {
//   if (string.length % 2 !== 0) {
//     return string[(string.length - 1) / 2];
//   } else {
//     return string.slice((string.length - 1) / 2,(string.length - 1) / 2 + 2 );
//   }
// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

// function negative(num) {

//   return num >= 0 ? -num : num;
// }

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0


// function sequence(num) {
//   let result = [];

//   for (let n = 1; n <= num; n += 1) {
//     result.push(n);
//   }

//   return result;
// }

// console.log(sequence(1));


// function swapName(name) {
//   return name.split(' ').reverse().join(' ,');
// }

// console.log(swapName('harold camacho'));

// function sequence(count, num) {
//   let result = [];

//   for (let n = num; result.length < count; n += num) {
//     result.push(n);
//   }

//   return result;
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

// function reverseSentence(str) {
//   return str.split(' ').reverse().join(' ');
// }

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

// function reverseWords(str) {
//   let wordArr = str.split(' ');

//   return wordArr.map(word => {
//     if (word.length >= 5) {
//       return word.split('').reverse().join('');
//     } else {
//       return word;
//     }
//   }).join(' '); 
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

// write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number

// the function does not mutate the argument.

// const ALPHABETIC = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

// let alphaSort = function(word1, word2) {
//   if (word1 > word2) {
//     return 1
//   } if (word1 < word2) {
//     return -1
//   } else {
//     return 0
//   }
// }

// function alphabeticNumberSort(nums) {
//   let copy = [...nums];

//   return copy.sort((a, b) => alphaSort(ALPHABETIC[a],ALPHABETIC[b]));
// }

// console.log(alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

// function multiplyAllPairs(arr1, arr2) {
//   let result = [];

//   for (let idx1 = 0; idx1 < arr1.length; idx1 += 1) {
//     for (let idx2 = 0; idx2 < arr2.length; idx2 += 1) {
//       result.push(arr1[idx1] * arr2[idx2]);
//     }
//   }

//   return result.sort((a,b) => a - b);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// console.log(multiplyAllPairs([4, 3, 1, 2],[2, 4] ));

// function sumOfSums(arr) {
//   let result = [];

//   for (let end = 0; end <= arr.length; end += 1) {
//     result.push(arr.slice(0, end));
//   }
//   console.log(result);
//   return result.filter(a => a.length > 0).map(subarr => {
//     return subarr.reduce((sum, num) => sum += num);
//   }).reduce((sum, num) => sum += num);
// }

// console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// problem: 
// write a function that receives a string and returns a string with staggered case. every other character in the input string is upcased and it is followed by lowercase character. 
// non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.

// input: string
// output: string (staggered case)


// data structures: arrays, strings

// algorithm: 
// split the input string into characters
// create a variable that keeps track of each char that needs to be uppercase. initialize it to true
// iterate through the input string
// if the current character is alphabetic and the char needs upper
  // turn the current char uppercase
  // switch needs upper 
// else if the current char is alphabetic
  // lowercase the current char
  // switch needs upper
// else return the char as is
// join and return

// function staggeredCase(str) {
//   if (typeof str !== 'string') return '';

//   let needsUpper = true;
//   let strArr = str.split('');

//   return strArr.map(char => {
//     if (char.match(/[a-z]/i)) {
//       if (needsUpper) {
//         needsUpper = !needsUpper
//         return char.toUpperCase();
//       } else {
//         needsUpper = !needsUpper;
//         return char.toLowerCase();
//       }
//     } else {
//       return char;
//     }
//   }).join('');
// }


// console.log(staggeredCase()); // ''
// console.log(staggeredCase('a')); // A
// console.log(staggeredCase('A')); // A
// console.log(staggeredCase('aa')); // Aa
// console.log(staggeredCase('Hello')); // HeLlO
// console.log(staggeredCase('Hello World!')); // HeLlO wOrLd!
// console.log(staggeredCase('h311o')); // H311o
// console.log(staggeredCase('ignore 77 the 444 numbers'));
// console.log(staggeredCase('ALL CAPS')); // AlL cApS

// function searchWord(str, text) {
//   let regex = new RegExp(str, 'ig');
//   return text.split(' ').map(s => {
//     if (s.match(regex)) {
//       return `**${s.toUpperCase()}**`
//     } else {
//       return s
//     }
//   }).join(' ')
// }
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      // 3

// function findFibonacciIndexByLength(length) {
//   let index = 3n;
//   let first = 1n;
//   let second = 1n;
//   let fib = first + second;
//   while (String(fib).length < length) {
//     second = first;
//     first = fib;
//     fib = first + second;
//     index += 1n;
//   }

//   return index
// }

// console.log(findFibonacciIndexByLength(10000n));

// function fibonacci(n) {
//   if (n <= 2) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }

// console.log(fibonacci(20))

// function fibonacci(nth) {
//   if (nth <= 2) return 1;
  
//   let first = 1;
//   let second = 1;
//   let fib;

//   while (nth > 2) {
//     fib = first + second;
//     second = first;
//     first = fib;
//     nth -= 1;
//   }

//   return fib
// } 

// console.log(fibonacci(75))



// function swap(arr, i1,i2) {
//   let temp;
  
//   temp = arr[i1];
//   arr[i1] = arr[i2];
//   arr[i2] = temp;
//   return arr;
// }

// function bubbleSort(arr) {
//   let length = arr.length
//   while (true) {
//     let swapped = false;

//     for (let i = 1; i < length; i += 1) {
//       let current = i;
//       let previous = i - 1;

//       if (arr[previous] > arr[current]) {
//         swap(arr, previous, current);
//         swapped = !swapped;
//       } else {
//         continue;
//       }
//     }
//     if (!swapped) {
//       break
//     }
//   }
// }

// const array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// problem: given an array of numbers sorted in ascending order. replace some duplicates for "_". This must be donw in place such that each unique element appears at most twice. The relative order of the elements shouls be kept the same. The size of the input array must be kept the same. The replaced elements are moved to the back of the array.


// data structures: arrays 

// algorithm: 

// helper function: replace duplicates
// ITERATE through the input arr
  // INITIALIZE count = 1
  // IF current element === previous element
    // cunt += 1
  // ELSE if current element !== previous element
    // count = 1
  // END IF

  // IF count === 3
    // current element = '_'
    // count = 1;
  //

// return arr

// helper function 

//test cases

// function sortNums(num) {
//   if (typeof num === 'number') {
//     return 1;
//   } else {
//     return -1
//   }
// }

// function removeDuplicates(arr) {
//   let count = 1;
//   for (let i = 1; i < arr.length; i += 1) {
//     let current = i;
//     let previous = i - 1;
    

//     if (arr[current] === arr[previous]) {
//       count += 1;
//     } else {
//       count = 1;
//     }
//     console.log(count);
//     if (count === 3) {
//       arr[current] = '_';
//     }
//   }

//   return arr;
// }
// // removeDuplicates() // []
// // removeDuplicates([]) // []
// // removeDuplicates([1]) // [1]
// // removeDuplicates([1,1]) // [1, 1]
// removeDuplicates([1,2,3,,3]) // [1,2,3, '_']
// console.log(removeDuplicates([1,1,1,2,2,3,4,4,4])); // [1,1,2,2,3,4,4, '_', '_']

// arr = [1,1,1,2,2,2,3,4] 
// removeDuplicates(arr);
// console.log(arr) // [1,1,2,2,3,4, '_', '_']


/**
 * ​Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.
 * 
 * 

 * 
 */

// data structures: arrays, strings 

// algorithm: 
// if the input !arr return []
// if the length arr === 0 return []
// flatten the input array
// create a results arr
// create an array `seen`

// iterate through the flatten arr
  // initialize candidate = current element if number turn into string else leave as is

  // if seen does not include candidate || does not contain any element type of object
    // push candidate into seen
    // push current element into result
  // 

  // return result



//   function flattenAndUnique(arr) {
//     if (!Array.isArray(arr)) return [];
//     if (arr.length === 0) return [];

//     let flatArr = arr.flat();

//     if (flatArr.length === 0) return [];
//     let seen = [];
//     let result = [];

//     for (let i = 0; i < flatArr.length; i += 1) {
//       let candidate;

//       if (typeof flatArr[i] === 'number') {
//         candidate = String(flatArr[i]);
//       } else {
//         candidate = flatArr[i];
//       }
      
//       if (typeof candidate === "object") {
//         if (!seen.some(el => typeof el === "object")) {
//           seen.push(candidate);
//           result.push(flatArr[i]);
//         }
//       } else {
//         if (seen.indexOf(candidate) === -1) {
//           seen.push(candidate);
//           result.push(flatArr[i]);
//         }
//       }
//     }

//     return result;
//   }
// // test cases: 

//  console.log(flattenAndUnique()); // []
//  console.log(flattenAndUnique([])); // []
//  console.log(flattenAndUnique([[], []])); // []
//  console.log(flattenAndUnique([[true, false], [true]])); // [true, false]

//  console.log(flattenAndUnique([[true, false], [true, {}]])) // [true, false, {}]
//  console.log(flattenAndUnique([[true, false], [true, {}], [{}]])); // [true, false, {}]

//  console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]));; // [1, 2, 3, 4, 5, 'a']

//  console.log(flattenAndUnique([[1, 2, '3'], [3, 4, 5, 'a']]));; // [1, 2, '3', 4, 5, 'a']

//  console.log(flattenAndUnique([[1,2,3],,['3',2,,3]])); // [1,2,3]
//  console.log(flattenAndUnique([[-1, -1, 2], [12.5, 12.5]])); // [-1, 2, 12.5]

/*
You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.


ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
    name: "James",
    emergenceNumber: "617-771-1082",
  }, {
    name: "Alice",
    alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]) ➞ [{
  teacher: "Ms. Car",
  name: "James",
  emergencyNumber: "617-771-1082",
}, {
  teacher: "Ms. Car",
  name: "Alice",
  alergies: ["nuts", "carrots"],
}, {
  teacher: "Mr. Lamb",
  name: "Aaron",
  age: 3,
}]
*/


// data structures: arrays and objects

// algorithm: 

// if the input is not an array return []
// if the input length === 0 retun []

// validate objects
  // a valid object has a data property

// filter the input array from ivalid objects
// if the filtered array length === 0  return []
// create a results array
// iterate through the filtered array
// check if data is empty
  // if it is, pass an empty array into results
  // else iterate through data 
    // build the results object from the inner loop
    // push them into results
  //
// filter any empty array from results. 

// function ungroupStudents(teacherData) {
//   if (!Array.isArray(teacherData)) return [];
//   if (teacherData.length === 0) return [];

//   let filteredArray = teacherData.filter(obj => {
//     return obj.data;
//   });

//   if (filteredArray.length === 0) return filteredArray;

//   let results = [];

//   filteredArray.forEach(obj => {
//     if (obj.data.length === 0) {
//       results.push([]);
//     } else {
//       obj.data.forEach(student => {
//         if (student.name) {
//           results.push({"teacher": obj.teacher, ...student});
//         }
//       });
//     }
//   });
//   return results.filter(el => typeof el === "object" && !Array.isArray(el));
// }

// // console.log(ungroupStudents()); // []
// // console.log(ungroupStudents({})); // []
// // console.log(ungroupStudents([])); // []
// // console.log(ungroupStudents([{teacher: "Ms. Car"}]
// // )); // []

// // console.log(ungroupStudents([{
// //   teacher: "Ms. Car",
// //   data: []}])); // []

// console.log(ungroupStudents([{
//   teacher: "Ms. Car",
//   data: [],
// }, {
//   teacher: "Mr. Lamb",
//   data: [{
//     name: "Aaron",
//     age: 3
//   }]
// }])); 

// // {
// //   teacher: "Mr. Lamb",
// //   name: "Aaron",
// //   age: 3,
// // }

// console.log(ungroupStudents([{
//   teacher: "Ms. Car",
//   data: [{
//     name: "James",
//     emergenceNumber: "617-771-1082",
//   }, {
//     name: "Alice",
//     alergies: ["nuts", "carrots"],
//   }],
// }, {
//   teacher: "Mr. Lamb",
//   data: [{
//     name: "Aaron",
//     age: 3
//   }]
// },,])); 

// // [{
// //   teacher: "Ms. Car",
// //   name: "James",
// //   emergencyNumber: "617-771-1082",
// // }, {
// //   teacher: "Ms. Car",
// //   name: "Alice",
// //   alergies: ["nuts", "carrots"],
// // }, {
// //   teacher: "Mr. Lamb",
// //   name: "Aaron",
// //   age: 3,
// // }]

// console.log(ungroupStudents([{
//   teacher: "Ms. Car",
//   data: [{}, {
//     name: "Alice",
//     alergies: ["nuts", "carrots"],
//   }],
// }, {
//   teacher: "Mr. Lamb",
//   data: [{
//     name: "Aaron",
//     age: 3
//   }]
// }]))

// // [{
// //   teacher: "Ms. Car",
// //   name: "Alice",
// //   alergies: ["nuts", "carrots"],
// // }, {
// //   teacher: "Mr. Lamb",
// //   name: "Aaron",
// //   age: 3,
// // }]

// console.log(ungroupStudents([{
//   teacher: "Ms. Car",
//   data: [{
//     emergenceNumber: "617-771-1082",
//   }, {
//     name: "Alice",
//     alergies: ["nuts", "carrots"],
//   }],
// }, {
//   teacher: "Mr. Lamb",
//   data: [{
//     name: "Aaron",
//     age: 3
//   }]
// }])); 
// // // [{
// //   teacher: "Ms. Car",
// //   name: "Alice",
// //   alergies: ["nuts", "carrots"],
// // }, {
// //   teacher: "Mr. Lamb",
// //   name: "Aaron",
// //   age: 3,
// // }]

// problem:

// given two words, how many letters do you have to remove to make them anagrams? Write a function that receives to words and removes characters from each word until both words become anagrams of each other.

// return the count of characters removed.


// data structures: arrays

// algorithm:
// if any of the input strings is not a string return 0
// if both input strings are empty return 0
// if one string is empty, return the length of the non empty string.
// break both strings into an array of characters.
// filter each array of characters based on its counterpart.
// if both filtered arrays are empty, return the sum of the lengths of both strings.
// if both filtered arrays contain characters, return the sum of the lengths of filtered arrays by the sum of the lengths of the input strings. 


// function anagramDifference(str1, str2) {
//   if ([str1, str2].some(s => typeof s !== 'string')) return undefined;
//   if (str1.split('').sort().join('') === str2.split('').sort().join('')) return 0;
  

//   let compStr = (str1 + str2).split('').sort();
//   let anagram = [];
  
//   compStr.forEach(char => {
//     if ((str1.includes(char) && str2.includes(char)) && !anagram.includes(char)) {
//       anagram.push(char);
//     }
//   });

//   if (anagram.length === 0) {
//     return str1.length + str2.length;
//   } else {
//     return (str1.length - anagram.length) + (str2.length - anagram.length);
//   }
// }

// // test cases:


// console.log(anagramDifference()); // undefined
// console.log(anagramDifference("")); // undefined
// console.log(anagramDifference("", "")); // 0
// console.log(anagramDifference("aba", "baa")) // 0 
// console.log(anagramDifference("a", "")); // 1
// console.log(anagramDifference("", "a")); // 1
// console.log(anagramDifference("bc", "ac")); // 2
// console.log(anagramDifference("bc", "da")); // 4 
// console.log(anagramDifference("abc", "f")); // 4 
// console.log(anagramDifference("codewars", "hackerrank")); // 10 
// console.log(anagramDifference("nfpnkoucndgjaorokgqijepikzknmhaecjtkohbflxyenfnhdxwp", "qijnnfvgnvwhgkbm")); // 10 

// Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

// input: string
// output: array de hashtags


// data structures: strings, array 

// algorithm: 
// create a guard clause that checks if the current input is a string.
  // if it is not a string and the length of the arguments is 0:
    // log: invalid input: no arguments given

    // else if input != string and arguments length > 0


    // helper function: formatError
    // INITIALIZE message = "Invalid Input: "

    // if (el is array)
      // return message + array
    // if (el is null)
      // rerturn message + null
    // if (typeof element is number)
      // return message + number
    // if (el is object and not null) 
      // return message + object 
    // else 
      // message + undefined
  
  // use regex to remove all non alphabetic chars
  // if the return is [] return []

  // map wordsArr
    // return "#" + word
  // 

  // use sort() to sort stirngs based on length

  // slice the sorted array from idex0 to index 2
  // return 

//   function getHashtag(words) {
//     if (typeof words !== 'string' && arguments.length === 0) {
//       return "Invalid input: no arguments given";
//     } else if (typeof words !== 'string') {
//       return (formatError(words));
//     }

//     let cleanWords = words.match(/[a-z]+/ig);
//     if (cleanWords === null) return [];

//     let hashtags = cleanWords.map(word => {
//       return "#" + word.toLowerCase()
//     });

//     hashtags.sort((a, b) => b.length - a.length);

//     if (hashtags.every(s => s.length === hashtags[0].length)) {
//       return [hashtags[0]];
//     }

//     return hashtags.length <= 3 ?  hashtags : hashtags.slice(0, 3);
//   }

// function formatError(el) {
//   let message = 'Invalid input: expected string instead got:';

//   if (Array.isArray(el)) {
//     return `${message} array`;
//   } else if (el === null) {
//     return `${message} null`;
//   } else if (typeof el === 'number') {
//     return `${message} number`;
//   } else if (typeof el === "object" && el !== null) {
//     return `${message} object`;
//   } else {
//     return `${message} undefined`;
//   }
// }

// // test cases: 

// console.log(getHashtag()); // log 'invalid input: no arguments given'
// console.log(getHashtag({})); // log invalid input: expected string instead got: object
// console.log(getHashtag([])); // invalid input: expected string instead got: array
// console.log(getHashtag(100)); // invalid input: expected string instead got: number
// console.log(getHashtag(null)); // // got: null
// console.log(getHashtag(undefined)); // got undefined

// console.log(getHashtag("  ")); // []
// console.log(getHashtag("")); // []
// console.log(getHashtag("#$%123^")); // []

// console.log(getHashtag("a")); // ["#a"] 
// console.log(getHashtag("Habla cole que")); // ["#habla", "#cole", "#que"]
// console.log(getHashtag("How the Avocado Became the Fruit of the Global Trade")); // ["#avocado", "#became", "#global"]
// console.log(getHashtag("Why You Will Probably Pay More for Your Christmas Tree This Year")); // ["#christmas", "#probably", "#will"]

// console.log(getHashtag("aaaaa bbbbb cccccc")); // ["#aaaaa"];

// console.log(getHashtag("Hello, World!")); // ["#hello"]

// problem: write a function that receives a string and returns a list of all substrings that are palindromic. The substrings in the returned list should be sorted in the order they appear in the input string. Suplicte strings should be included multiple times. 

// rules consider all characters and pay attention to case; that is, AbA is not the same as Aba. The string may also contain special characters. Also assume single characters are not palindromes.



// data structures: arrays 

// algorithm: 
// create a guard clause that will return an empty array if the input is not an array.

// in order to verify if the string is a palindrome, compare the current string to its reversed version.

// create a helper function that collects all substrings from the input.
  // input a string:
  // output an array of substraings. 

  // CREATE result = [];

  // ITERATE through the input string i = 0
    // ITERATE through the input string i2 = 0
      // i = start
      // i2 = end
      // result.push(string.slice(start, end));
    // END FOR
  // END FOR

  // return result

  // filter the substrings array
  // a palindrome is a string who is equal to its reversed version and its greater than 1 in length

  // if the filtered array is empty return []

 // else return the array of substrings
// test cases:

// function substrings(str) {
//   let result = [];

//   for (let start = 0; start <= str.length; start += 1) {
//     for (let end = 0; end <= str.length; end += 1) {
//       result.push(str.slice(start, end));
//     }
//   }

//   return result;
// }


// function palindromes(str) {
//   if (typeof str !== 'string') return [];

//   let substringsArr = substrings(str);

//   let palindromeSubstrings = substringsArr.filter(substring => {
//     return substring === substring.split('').reverse().join('') && substring.length > 1;
//   }).filter(s => s !== '');

//   return palindromeSubstrings;
// }
// console.log(palindromes()) // []
// console.log(palindromes({})) // []
// console.log(palindromes("a")) // []
// console.log(palindromes("aA")) // []
// console.log(palindromes("aa")) // ["aa"]
// console.log(palindromes("AbcA")) // ["AbcA"]
// console.log(palindromes("abaaa")) // ["aba", 'aa', 'aaa']
// console.log(palindromes("abcba-abcba")) // ["abcba", "bcb", "abcba", "ba-ab", "bcb", "abcab"]

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   // "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   // "-madam-", "madam", "ada", "oo" ]

// // console.log(palindromes('knitting cassettes'));
// // // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]



// problem: given an array of strings an an integer k, return the k distinct strings present in the arr. If there are fewer than k distinct strings, return an empty string.

// data structures: arrays and objects

// algorithm: 

// input: an array of strings
// output: a string

// if the input is not an array and a number
  // return ''

// if the input array is empty, return ''
// if the second value is not a number or is < 0 return ''

// create a frequency counter.
  // create a results object 
  // iterate through the input array
  // if the current element does not exist in the result object
  // assign it as key with a value of 1
  // if the element exist, increment the value by 1

  // return the result object.

  // filter the input array based on the frequency count.
  // if the count of an element in the arrays is === 1
  // select that element

  // return the element from the results array located at n -1 index. 


// function distinctString(arr, n) {
//   if (!Array.isArray(arr) || typeof n !== 'number') return '';
//   if (n < 0 || arr.length === 0) return '';

//   let frequencyCount = freQcounter(arr);

//   let distinct = arr.filter(el => {
//     return frequencyCount[el] === 1;
//   });

//   if (distinct.length < n) return '';
//   if (n === 0) return distinct[0];

//   return distinct.length === 0 ? '' : distinct[n - 1];

// }



// function freQcounter(arr) {
//   return arr.reduce((obj, n) => {
//     obj[n] = (obj[n] || 0) + 1;
//     return obj;
//   }, {});
// }

// // test cases: 
// console.log(distinctString()) // ''
// console.log(distinctString([1,2,3], 'ha')) // ''
// console.log(distinctString(['a','s'], -1)) // ''
// console.log(distinctString([], 2)) // ''
// console.log(distinctString(['a','a'], 1)) // ''
// console.log(distinctString(['a', 'b', 'b'], 2)) // ''

// console.log(distinctString(["a"], 1)) // 'a'
// console.log(distinctString(['a','a','v'], 0)) // 'v'
// console.log(distinctString(['a', 'b', 'c'], 2)) // 'b'

// console.log(distinctString([1, null, false, 3,,1], 2)) // false
// console.log(distinctString(["a", 1, "b", 1, "b"], 1)) // 'a'


// problem: given an array of integers, nums return the third largest number in the array. if the third largest number does not exist, return the greatest number

// you are not allowed to sor the array

// data structures: arrays

// algorithm:

// if the input is not an array return NaN

// if the input is an empty array return NaN

// filter out all elements that are not numbers and are not NaN.
// if the filtered array is empty return NaN
// iterate through the filtered array 3 times.
// extract the max value, filter the max value 
// return the max value at the end of the iterations


// function thirdMax(arr) {
//   if (!Array.isArray(arr) || arr.length === 0) return NaN;

//   let filtered = arr.filter(element => {
//     return typeof element === 'number' && !Number.isNaN(element);
//   });

//   filtered = [...new Set(filtered)]
//   if (filtered.length === 0) {
//     return NaN;
//   } else if (filtered.length < 3) {
//     return Math.max(...filtered);
//   }

//   let max = 0
//   for (let round = 0; round < 3; round += 1) {
//     max = Math.max(...filtered)
//     filtered = filtered.filter(el => el !== max);
//   }

//   return (max);
// }


// // test cases: 
// console.log(thirdMax()) // NaN
// console.log(thirdMax(1)) // NaN
// console.log(thirdMax([])) // NaN
// console.log(thirdMax([NaN])) // NaN
// console.log((thirdMax(['s', NaN, false]))) // NaN

// // console.log(thirdMax([1,1,2])) // 2
// // console.log(thirdMax([2,1,2])) // 2
// console.log(thirdMax([2,1,1,2])) // 2
// // console.log(thirdMax([1])) // 1
// // console.log(thirdMax([1,1])) // 1
// // console.log(thirdMax([1,2])) // 2

// // console.log(thirdMax([1,2,3])) // 1
// // console.log(thirdMax([3,1,2])) // 1
// // console.log(thirdMax([4,2,3,3, 4])) // 2
// // console.log(thirdMax([0, -1, 2])) // -1
// // console.log(thirdMax([NaN, false, 3, "a"])) // 3
// // console.log(thirdMax([Infinity, -1, -Infinity])) // -Infinity


// problem: 

// write a function to fund the longest common prefix string amongst an array of string. 
// if there is no common prefix, return an empty string.

// data structures: arrays 

// if the input is not an array return ''

// if all elements in the array are "" return  ''

// filter out any element that is not a string or ""

// if the array is empty return ''

// if the array has one element return that element

// if the array has more than one element find the longest common prefix:
    

  // return result

//   function longestCommonPrefix(words) {
//   if (!Array.isArray(words) || words.length === 0) return '';
//   let prefix = '';

//   for (let i = 0; i < words[0].length; i += 1) {
//     let char = words[0][i]
//     if (!char) return '';
//     if (words.every(word => word[i] === char)) {
//       prefix += char;
//     } else break; 
//   }
//   return prefix;
//   }
// // test cases:


// console.log(longestCommonPrefix()) // ''
// console.log(longestCommonPrefix({})) // ''
// console.log(longestCommonPrefix("A")) // ''
// console.log(longestCommonPrefix(['abc', 'def'])) // ''
// console.log(longestCommonPrefix(["", ""])) // '' 

// console.log(longestCommonPrefix(['hello'])) // ['hello']
// console.log(longestCommonPrefix(["", 'hello'])) // ''
// console.log(longestCommonPrefix(['hello', 'helicopter', 'helium'])) // 'hel'

// console.log(longestCommonPrefix([12, "a", 'aaba', 'aba'])) // ''
// console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'


// console.log(longestCommonPrefix(['house', 'home', 'homer'])) // 'ho'
// console.log(longestCommonPrefix(['heart',,'heat', 'hi'])) // 'h'
// console.log(longestCommonPrefix(['1223', '122345', '12234556'])) // '1223'

// problem: write a function that selects all words that have all the same vowels (in any order or number as the first word), including the first word

// data structures: arrays 

// algorithm: 

// create a guard clause that checks if the input is a valid array
// return [] if not

// if all element is an empty string return []

// clean the array from empty spaces and non desired data-types

// if the clean array is length of 1 return the one element.

// extract all vowels from the first string in the array

// filter through the input array

// extract the vowels for th current word

// if every vowel in the current wordVowel array is included in forstWordvowel

// return the current word


// function sameVowelGroup(words) {
//   if (!Array.isArray(words) || words.length === 0) return [];
//   if (words.every(el => el === '')) return [];

//   let cleanWords = words.filter(word => {
//     return typeof word === 'string' && word !== '';
//   });

//   if (cleanWords.length === 0) return [];
//   if(cleanWords.length === 1) return [words[0]];
 
//   let firstVowels = cleanWords[0].match(/[aeiou]/ig);

//   return cleanWords.filter(word => {
//     let currentVowels = word.match(/[aeiou]/ig);

//     if (currentVowels.every(vowel => firstVowels.includes(vowel))) {
//       return word;
//     }
//   })
// }

// // test cases:

// console.log(sameVowelGroup()) // []
// console.log(sameVowelGroup(8)) // [] 
// console.log(sameVowelGroup([])) // [] 
// console.log(sameVowelGroup([12,33])) // [] 
// console.log(sameVowelGroup(["", ""])) // [] 
// console.log(sameVowelGroup(['aba', ''])) // ['aba'] 
// console.log(sameVowelGroup(['aba', '', 'casa', ''])) // ['aba', 'casa'] 
// console.log(sameVowelGroup(['aba',,'casa'])) // ['aba', 'casa'] 
// console.log(sameVowelGroup(['abaco', 'popi', 'casai', 'arci'])) // ['abaco'] 
// console.log(sameVowelGroup(sameVowelGroup(["toe", "ocelot", "maniac"]))) // ['toe', 'ocelot'] 
// console.log(sameVowelGroup(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]))) // ['many']
// console.log(sameVowelGroup(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]))) // ["hoops", "bot", "bottom"]


// problem: given an array of objects that includes a product name and its quantity write a function that splits the object based on its quantity and returns it an object in an array


// data structures: objects, arrays

// algorithm:

// create a guard clause that makes sure the input object is an array. if it is not return []

// if the input array is empty return []

// clear the input array from invalid objects and non desired elements

// create a results array

  // a valid object has the keys name and quantity.
  // typeof valid element is object and it is not an array (dont worry about null)
  
  // helper function: isValidObject
    // if (typeof el !== object || el is array) return false

    // extract keys.
    // if keys include name and keys include quantity return true
    // else return false

// iterate through the filtered array

// while quantity value is > 0
  // push an object with the name property and quantity of 1 into a results array.
// end while
// end iteration

// return results array.

// function isValidObject(el) {
//   if (typeof el !== 'object' || Array.isArray(el)) return false;

//   let keys = Object.keys(el); 
  
//   return keys.includes('name') && keys.includes("quantity");

// }

// function splitBunches(arr) {
//   if (!Array.isArray(arr) || arr.lenght === 0) return [];

//   let filteredArr = arr.filter(el => isValidObject(el));
//   if (filteredArr.length === 0) return [];

//   let result = [];

//   filteredArr.forEach(obj => {
//     let qty = obj.quantity;

//     while (qty > 0) {
//       result.push({name: obj.name, quantity: 1});
//       qty -= 1;
//     }
//   });

//   return result;
// }

// // test cases: 

// console.log(splitBunches()) // [] 
// console.log(splitBunches([])) // [] 
// console.log(splitBunches([3])) // [] 
// console.log(splitBunches([{}])) // []
// console.log(splitBunches([{name: "grapes", color: 0}])) // [] 

// console.log(splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ])) // 
// // [
// // //   { name: "currants", quantity: 1},
// // //   { name: "grapes", quantity: 1 },
// // //   { name: "grapes", quantity: 1 },
// // //   { name: "bananas", quantity: 1 },
// // //   { name: "bananas", quantity: 1 }
// // // ]

// console.log(splitBunches([
//   { name: "bananas", quantity: 2 }
// ]))
// // // // [
// // // //   { name: "grapes", quantity: 1 },
// // // //   { name: "grapes", quantity: 1 }
// // // // ]
// // // console.log(splitBunches()) // 

// console.log(splitBunches([
//   { name: "grapes", quantity: 2 }, {name: "grapes", color: 0}
// ]))

// // // [
// // //   { name: "grapes", quantity: 1 },
// // //   { name: "grapes", quantity: 1 }
// // // ]

// Strings:  empty strings, case-sensitivity, special characters, string representation of digits

// Numbers: NaN, Infinity, 0, negative numbers


// Arrays: empty arrays, sparse arrays, are all items in the array elements (non-negative indices)

// Objects: empty objects, ...?, null


// Playing with Nested Objects

// Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.

// data structures: objects, arrays 


// algorithm: 
// filter the input object and return the students with distinct marks. if marks are repeated return the eledest. 

// main issue: identifying distinct marks between objects. 

// obj1
// obj2
// obj3
// obj4

// function getObject(obj) {
//   if (Object.keys(obj).length === 0) return {};
//   if (Object.entries(obj).length === 1) return obj

//   // frequency counter for marks
//   let marks = {};
//   for (let prop in obj) {
//     marks[obj[prop].marks] = (marks[obj[prop].marks] || 0) + 1
//   }


//   let unique = {};
//   for (let prop in obj) {

//     if (marks[obj[prop].marks] === 1) {
//       unique[prop] = obj[prop];
//     } else {
//       let entries = Object.entries(obj);
//       entries.sort((a,b) => b[1].age - a[1].age);
//       unique[entries[0][0]] = entries[0][1];
//     }
//   }
//   return unique
// }

// // // test cases: 

// console.log(getObject({})) // {}
// console.log(getObject({0: {age: 18, name: 'john', marks: '400'}})) // (0: {age: 18, name: 'john', marks: '400'}}

// console.log(getObject({
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 17, name: "julie", marks: "400" },
//   "2": { age: 16, name: "Robin", marks: "200" },
//   "3": { age: 16, name: "Bella", marks: "300" }
// }))

// // ➞ {
// // //   "0": { age: 18, name: "john", marks: "400" },
// // //   "2": { age: 16, name: "Robin", marks: "200" },
// // //   "3": { age: 16, name: "Bella", marks: "300" }
// // // }

// console.log(getObject({
//   "0": { age: 18, name: "john", marks: "500" },
//   "1": { age: 17, name: "julie", marks: "400" },
//   "2": { age: 16, name: "Robin", marks: "200" },
//   "3": { age: 16, name: "Bella", marks: "300" }
// }))

// // {
// // //   "0": { age: 18, name: "john", marks: "500" },
// // //   "1": { age: 17, name: "julie", marks: "400" },
// // //   "2": { age: 16, name: "Robin", marks: "200" },
// // //   "3": { age: 16, name: "Bella", marks: "300" }
// // // }


// console.log(getObject({
//   "0": { age: 16, name: "Bella", marks: "400" },
//   "1": { age: 17, name: "julie", marks: "400" },
//   "2": { age: 16, name: "Robin", marks: "400" },
//   "3": { age: 18, name: "john", marks: "400" },
// }));

//  // { {"3": { age: 18, name: "john", marks: "400" }}


// problem: Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat number strings as duplicates (1 === '1') and keep the one that comes first in the result. 

// rules: 

// the input consist of a 2D array where each sub array contains numbers and strings.
// the input could be empty if that is the case return an empty array
// the function should remove all duplicates. 
// number strings and numbers are considered equal in this case.
// in this case always keep the value that appears first in the array


// data structures: arrays

// algorithm: 
// GOALS: flatten the array. Keep track of the 'seen' objects.
// while iterating trhough the flatten array if an object has been 'seen' it should be left out of the final result.

// numbers and numbers strings are treated the same so converting numbers into strings is the best way to compare them.

// main function: flattenAndUnique:
// if the input array is empty return []
// flat the input array
// if the flatten array is empty return []

// CREATE seen = [];
// CREATE result = [];

// iterate through the flatten array:
// i = 0
// current element = flattenArr[i]
// candidate = flattenArr[i]
//  if the current element is a number turn candidate into a string, else leave as is.


// IF 'seen' does not include the candidate
// PUSH the candidate into seen
// PUSH the current element into result
// END IF

// END FOR

// RETURN result

// function flattenAndUnique(array) {
//   if (array.length === 0) return [];

//   let flattenArr = array.flat();
//   if (flattenArr.length === 0) return [];

//   let seen = [];
//   let result = [];

//   for (let i = 0; i < flattenArr.length; i += 1) {
//     let currentEl = flattenArr[i];
//     let candidate;

//     if (typeof currentEl === 'number') {
//       candidate = String(currentEl);
//     } else {
//       candidate = currentEl;
//     }

//     if (seen.indexOf(candidate) === -1) {
//       seen.push(candidate);
//       result.push(currentEl);
//     }
//   }

//   return result;
// }

// // test cases:

// console.log(flattenAndUnique([])) // []
// console.log(flattenAndUnique([[], []])) // []
// console.log(flattenAndUnique([[1,2,3], []])) // [1,2,3]
// console.log(flattenAndUnique([['a', 'b', 'c'], [1,2,'a']])) // ['a', 'b', 'c', 1, 2]
// console.log(flattenAndUnique([[1,2,3], ['1', 2, 3]])) // [1,2,3]
// console.log(flattenAndUnique([[1,2,3], ['3', 'a', 4]])) // [1,2,3,'a',4]
// console.log(flattenAndUnique([[1,2,'3'], [3, 'a', 4]])) // [1,2,'3','a',4]
// console.log(flattenAndUnique([[NaN, 2, 3], ['NaN', 4,5]])) // [NaN, 2, 3, 4, 5]
// console.log(flattenAndUnique([[1,,2,3],,['3',4,5]])) //[1,2,3,4,5]

// problem: create a function that receives a string of letters with recurring characters. Teh function should identify and return the character in the string that appears first two times in the string.

// the output is an object where the key is the string character and the value is an array containing the first two index of its appearences in the string. 

// rules: 

// if the input is not a string or is an empty string return an empty object
// the return value is a character whose two first index appearances are the lowest index values found in the string.
// if no chars repeat return an empty object.

// data structures: arrays, object, strings

// algorithm:
// GOALS: create a frequency counter. Instead of counting appearances, this object should hold the index for a character every time it appears in the string.

// once we have the frequency counter object the entries should be sorted based on the total difference between the two index (ascending order)
// return the first entry which is the one whose distance between the first appearance and the second is smaller. 

// helper function: findCharIdx
// input a string
// output: an object

// CREATE result = {}
// split the input string into an array of chars.

// iterate through the array of chars
// if the resultObj[char] does not exist
// resultObj = []
// else 
// if resultObj[char].length < 2
// resultObj[char].push(index)

// return resultObj

// main function: recurIndex

// if the input is not a string or is an empty string return {}
// if a set of the input string lenght is the same as the input string return {}

// get appearances object
// extract the entries.
// sort the entries based on the absolute difference of the values in the array if the array has more than one element.

// return the first one

// function findCharIdx(string) {
//   let result = {};

//   let strChars = string.split('');

//   for (let i = 0; i < strChars.length; i += 1) {
//     let char = strChars[i];

//     if (!result[char]) {
//       result[char] = [i];
//     } else {
//       if (result[char].length < 2) {
//         result[char].push(i);
//       }
//     }
//   }
//   return result;
// }

// function difference(nums) {
//   return Math.abs(nums.reduce((acc, num) => {
//     acc -= num;
//     return acc;
//   }));
// }

// function recurIndex(string) {
//   if (typeof string !== "string") return {};
//   if (new Set(string).size === string.length) return {};

//   let appearances = findCharIdx(string);
//   let entries = Object.entries(appearances);
//   entries = entries.filter(entry => {
//     return entry[1].length === 2;
//   });

//   entries.sort((a,b) => difference(a[1]) - difference(b[1]));
//   return {[entries[0][0]]: entries[0][1]}
// }

// // test cases:

// console.log(recurIndex("")) // {}
// console.log(recurIndex(null)) // {}
// console.log(recurIndex("A")) // {} 
// console.log(recurIndex("AB")) // {} 
// console.log(recurIndex("ABCABC")) // {"A": [0, 3]} 
// console.log(recurIndex("YXZXYTUVXWV")); // {"X": [1, 3]}

// console.log(recurIndex("YZTTZMNERXE")) // {"T": [2, 3]}

// console.log(recurIndex("AREDCBSDERD")) // {"D": [3, 7]}


// problem: given two strings s and t return true if s is a subsequence of t, false otherwise.

// rules: a subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative position of the remaining chars. 
// the input will consist of lowercase letters only


// dta structures: arrays, objects booleans

// // algorithm: 
// // GOAL: break both input strings into arrays of chars.
// // iterate through s and in a nested loop iterate through t
// // if the current character of t is the same as the current char of s keep track of the char and its index.
// // this can be done with an object whose key is the char and the value is its index.

// // check that every value extracted from t is  subsequent from each other meaning val1 < val2 < val3 etc. if this is true at the end of the iteration return true else return false

// // helper function: findCharIdx
// // input: two strings 
// // output: an object

// // break both strings into chars
// // iterate through chars1 (s)
// // iterate throufh chars2(t)
// // if currentTchar === currentSchar
//   // if !result[currentSchar] 
//     // result[currentSchar] = currentTchar index
//   //

// // return result

// // main function: is subsequence
// // if any of the inputs is an empty string return false

// // get t subsequence index = helper function
// // extract values
// // iterate through values 
// // if current val > next val
//   // return false
// // end iteration

// // return true


// function findCharIdx(s, t) {
//   let result = {}

//   let sChars = s.split('');
//   let tChars = t.split('');

//   for (let i = 0; i < sChars.length; i += 1) {
//     for (let j = 0; j < tChars.length; j += 1) {
//       if (sChars[i] === tChars[j]) {
//         if (!result[sChars[i]]) {
//           result[sChars[i]] = j;
//         }
//       }
//     }
//   }
//   return result;
// }

// function isSubsequence(s, t) {
//   if ([s, t].some(string => string === '')) return false;

//   let indexOfT = findCharIdx(s, t);

//   if (Object.keys(indexOfT).length <= 1) return false;

//   let idx = Object.values(indexOfT);

//   let subsequence = true;

//   for (let i = 1; i < idx.length; i += 1) {
//     if (idx[i - 1] > idx[i]) {
//       subsequence = false;
//     }
//   }

//   return subsequence;
// }

// correct solution:

//     Use two pointers, one for s and one for t.

//     If the current character of s matches the current character of t, move both pointers. Otherwise, just move the pointer for t.

//     If the pointer for s reaches the end of s before or simultaneously as the pointer for t reaches the end of t, then s is a subsequence of t.

// function isSubsequence(s, t) {
//   if ([s,t].some(string => string === '')) return false;

//   let pointerS = 0;
//   let pointerT = 0;

//   while (pointerS < s.length && pointerT < t.length) {
//       if (s[pointerS] === t[pointerT]) {
//         pointerS++;
//       }
//       pointerT++;
//   }

//   return pointerS === s.length;
// }

// // test cases:

// console.log(isSubsequence("", "")) // false
// console.log(isSubsequence("a", "")) // false
// console.log(isSubsequence("", "a")) // false

// console.log(isSubsequence("abc", "exdf")) // false
// console.log(isSubsequence("ab", "a")) // false
// console.log(isSubsequence("abc", "bahgdc")) // false

// console.log(isSubsequence("a", "bca")) // true
// console.log(isSubsequence("ace", "abcde")) // true
// console.log(isSubsequence("abc", "xabhgdc")) // true
// console.log(isSubsequence("abc", "aaxbc")) // true



// myForEach:

// write a function named myForEach that is similar to forEach. Your function should take an array and another function as arguments. The function passed to myForEach should reassign a variable in the outer scopd. 

// input: an array and a function
// output undefined.

// rules: the callback function passed to myForEach should reassign a variable in the outer scope

// test cases: 


// function myForEach(array, func) {
//   for (let i = 0; i < array.length; i += 1) {
//     let num = array[i];
//     func(num, i, array);
//   }

//   return undefined;
// }

// let min = Infinity;
// let getMin = (value) => (min = value <= min ? value : min);

// // function getMin(value) {
// //   let min = value;

// //   return min = value >= min ? value :  min;
// // }

// myForEach([4,5,12,23,3], getMin);

// console.log(min) // 3

// write a function named myFilter that works similarly to the built in filter function in JS. 

// input an array and a function
// output: an array whose values are only that the function passed returns as true

// test cases:


// function myFilter(arr, func) { 
//   let result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (func(arr[i])) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// let isPythagoreanTriple = function (triple) {
//   return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
// }

// function isMultipleOfThreeOrFive(value) {
//   return value % 5 === 0 || value % 3 === 0;
// }

// console.log(myFilter([{ a: 3, b: 4,  c: 5 },
//   { a: 5, b: 12, c: 13 },
//   { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));


// function multiplesOfThreeOrFive(values) {
//   return myFilter(values, isMultipleOfThreeOrFive);
// }

// console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));

// function myMap(array, func) {
//   let result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     result.push(func(array[i], i, array));
//   }

//   return result;
// }

// let plusOne = (n) => (n + 1);

// console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

// function getBooksTitle(books) {
//   return myMap(books, getTitle);
// }

// function getTitle(books) {
//   return books.title;
// }

// let books = [
//   {
//     title: 'JavaScript and JQuery: Interactive Front-End Web Development',
//     author: 'Jon Ducket',
//     edition: '1st',
//   },
//   {
//     title: 'Eloquent JavaScript: A Modern Introduction to Programming',
//     author: 'Haverbeke',
//     edition: '2nd',
//   },
//   {
//     title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
//     author: 'Jennifer Niederst Robbins',
//     edition: '4th',
//   },
// ];

// function getTitle(book) {
//   return book['title'];
// }

// console.log(getBooksTitle(books));
// // console output
// [
//   "JavaScript and JQuery: Interactive Front-End Web Development",
//   "Eloquent JavaScript: A Modern Introduction to Programming",
//   "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
// ]


// function myReduce(array, func, init) {
//   let value;
//   let index;

//   if (init === undefined) {
//     value = array[0];
//     index = 1;
//   } else {
//     value = initial;
//     index = 0;
//   }

//   array.slice(index).forEach(el => value = func(value, el));
//   return value;
// }

// let smallest = (result, value) => (result <= value ? result : value);
// let sum = (result, value) => result + value;

// console.log(myReduce([5, 12, 15, 1, 6], smallest)) // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10)) // 49

// function processReleaseData(data) {
//   let result = [];

//   data.forEach(movie => {
//     if (movie.id >= 0 && movie.title) {
//       result.push({id: movie.id, title: movie.title})
//     }
//   });

//   return result;
// }

// let newReleases = [
//   {
//     'id': 70111470,
//     'title': 'Die Hard',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 0,
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//     'title': 'el burro',
//   },
//   {
//     'title': 'The Chamber',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 675465,
//     'title': 'Fracture',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
// ];

// console.log(processReleaseData(newReleases));


// let formatName = (name) => {
//   let cleanName = name.match(/[a-z]+/gi).join(' ');
//   return cleanName.split(' ').map(word => {
//     return word[0].toUpperCase('') + word.slice(1)
//   }).join(' ');
// }



// function processBands(data) {
//   return data.map(band => {
//     return {name: formatName(band.name), country: 'Canada', actove: band.active}
//   });
// }

// let bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

// console.log(processBands(bands));

// // should return:
// // [
// //   { name: 'Sunset Rubdown', country: 'Canada', active: false },
// //   { name: 'Women', country: 'Canada', active: false },
// //   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// // ]



// write a function that receives an array of objects containing students and data (nested array of objects)
// write a function that will ungroup every student so you can look at their details individually

// input: an array of objects
// output: an array of objects

//rules: assume all objects will be valid meaning they will contain a propery teacher and data.
// assume that data also contain valid values

// data structures: arrays and objects

// algorithm: 
// create a results array
// iterate through the input array

// iterate through data 
// push into results an object containing teacher and data deconstructed

// function ungroupStudents(list) {
//   let result = [];

//   list.forEach(teacher => {
//     teacher.data.forEach(student => {
//       result.push({teacher: obj.teacher, ...student});
//     });
//   });

//   return result;
// }

// console.log(ungroupStudents([{
//   teacher: "Ms. Car",
//   data: [{
//       name: "James",
//       emergenceNumber: "617-771-1082",
//   }, {
//       name: "Alice",
//       alergies: ["nuts", "carrots"],
//   }],
// }, {
//   teacher: "Mr. Lamb",
//   data: [{
//     name: "Aaron",
//     age: 3
//   }]
// }]));

// problem: write a function that receives an object containing chapters and a number representing the current chapter you are on.

// the function should return the chapter that is nearest the the current page. if there are multiple chapters with the same distance, retrutn the chapter with the highest page number.

// rules: all page numbers will be numbers
// return the chapter with highest page number if ever two pages are equidistant.

// algorithm: 

// iterate trhough the object.
// replace the value for each key by an array containing the current page number and the absolute difference of substracting the current page by the page of a chapter in the object.

// extract all entries from the modified object into a 2D array
// sort the array based on the absolute difference.
// if the absolute difference is the same for two elements,
//sort based on the page number in ascending order.
// return the first value

// function nearestChapter(book, currentPage) {
//   let copy = {...book}
//   for (let chapter in copy) {
//     let difference = Math.abs(copy[chapter] - currentPage);
//     copy[chapter] = [copy[chapter], difference];
//   }

//   let entries = Object.entries(copy);

//   entries.sort((a,b) => {
//     if (a[1][1] === b[1][1]) {
//       return b[1][0] - a[1][0];
//     } else {
//       return a[1][1] - b[1][1];
//     }
//   });

//   return entries[0][0];
// }

// console.log(nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200));

// console.log(nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10))

// console.log(nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3));


// problem: write a function that receives a string s and a letter and returns the percentage of appearances of letter in s.

// var percentageLetter = function(s, letter) {
//   const freq = s.split('').reduce((obj, char) => {
//       obj[char] = (obj[char] || 0 ) + 1
//       return obj
//   }, {});

//   let letterCount = freq[letter] ? freq[letter] : 0;
//   return Math.floor((letterCount / s.length) * 100);
// };

// console.log(percentageLetter('jjjjj', 'o'));

