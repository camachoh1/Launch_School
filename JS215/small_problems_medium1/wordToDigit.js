// problem:

// write a function that takes a sentence as an argument and returns a string where every occurence of a "number word" is converted to its corresponding digit. 

// a number word, is the word representation of a number ("one", 'two', 'three', etc.)

// input: a string containing words and special characters (spaces, punctuation, etc).

// output: a string containing words, numbers and special characters.

// example:

// wordToDigit('hello! One, beer please!) // 'hello! 1 beer please!);

// wordToDigit('Three little birds, one green, one red, one blue.'); // 3 little birds, 1 green, 1 red, 1 blue.

// wordToDigit('') // ''

// wordToDigit('one, two, three, four.') // 1, 2, 3, 4.

// data structures: Arrays, objects

  // split the string into an array of words.
  // use transformation to change the number words into numbers. 

  // an object maps each number word with its number.

  // algorithm:

  // initialize the numbers object.
    // keys = number words
    // values = digits.

  // break the string into an array of words

  // iterate through the array of words:
    // check if the current word exist in the number words object
    // if it does:
      // replace the current word with its respective value
    // else return as is.
    // join the resulting array

  function wordToDigit(sentence) {
    const wordDigit = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9};

    Object.keys(wordDigit).forEach(word => {
      let regex = new RegExp('\\b' + word + '\\b', 'g');
      sentence = sentence.replace(regex, wordDigit[word]);
    });

    return sentence;
  }

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks.")

console.log(wordToDigit('hello! One, beer please!')); // hello! 1 beer please!);

console.log(wordToDigit('Three little birds, one green, one red, one blue.')); // 3 little birds, 1 green, 1 red, 1 blue.

console.log(wordToDigit('')); // ''

console.log(wordToDigit('one, two, three, four.')); // 1, 2, 3, 4.

console.log(wordToDigit('The weight is done.')); 