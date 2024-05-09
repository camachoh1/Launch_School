// Basic Matching: yes/ no

let sample = 'Harold';
let sample2 = 'Brenno Kenji'
// sample.test(/a/);

 // LITERAL CHARACTERS ("match this character")
console.log('Literal characters:')
console.log(/aro/.test(sample));

// WILDCARD (.) // any one character ("match any character")
console.log('Dot Wildcard:')
console.log(/./.test(sample));
console.log(sample.match(/.../));

// CHARACTER CLASS ("match one of these characters")
console.log('Character Classes:')
console.log(sample.match(/[oha]/ig)); // class of literal chars
console.log(sample2.match(/[oha]/ig)); // class of literal chars
console.log(sample.match(/[d-h]/ig)); // class of  range of chars
console.log(sample.match(/[Hh][a-d]/)); 
console.log(sample2.match(/[Hh][a-d]/)); 
// NON-matching expressions for the regex above: Ba (!= ˆHh); He, dH
// MATCHING exp for the regex:  ha, Ha, Hd, 

console.log(sample2.match(/[^Bb]/g));  
/* note that ^ needs to be inside [] to perform exclusion. If ^ is outside of [], it means start of line.
/*
 **Character Classes Shortcuts**:
  - `\s`, `\S` (whitespace [space, tab, newline], non-whitespace)
  - `\d`, `\D` (any 0-9 digit)
  - `\w`, `\W` (any digit, alphabetical character, or underscore)
*/

// ANCHORS (where in a string should the match occur)
// ^ , $ (start/end of line)
// \b (word boundaries)
// \B (non-word boundaries)

// Hypothesis:
// What is word? A sequence of \w characters (delimited by \s)
// A word boundary (\b) is defined by a sequence of \w characters (i.e. by a word).
console.log('Anchors:');
console.log(sample.match(/[\w]/g)); // matches all characters in word
console.log(sample.match(/\w/g)); // same as above in this particular case
console.log(sample.match(/\w+/g)); 
console.log(sample2.match(/\w+/g)); 
console.log(sample2.match(/\b\w\w\w\w\w\w\b/g)); // isolates words (not characters within the word, but the entire word) that match the pattern


// QUANTIFIERS (how many times in a row does the match occur/ may operate on a single literal char / on a class / a capture group)
// usage: placed right after the character/class
//
console.log('Quantifiers:');
// * (zero or more) 
console.log(/ */.test(sample2));
console.log(/ */.test(sample));
// + (one or more)
console.log(/ +/.test(sample2));
console.log(/ +/.test(sample));
// ? (zero or one) // LOOSELY 0 or 1 or more?
let sample3 = 'Harold     Camacho';
console.log(/ ?/.test(sample3)); // true (?) 
console.log(/ */.test(sample3)); // true (?)
console.log(/ ?/.test(sample));  // true


// {n} (n times) // /n/{2}
console.log(/n{2}/.test(sample2)); // true nn
console.log(sample2.match(/n{2}/)); // ['nn',...]
console.log(sample2.match(/[m-n]{2}/ig)); // ['nn',...]
// {n,} // open-ended range (from n to infinity)
console.log(sample2.match(/n{1,}/));
// {m, n} // finite range {min, max}
console.log(sample2.match(/[a-z]{1,3}/g));
console.log('oooo'.match(/[a-z]{1,2}/g));

// * greediness (?)
/*

*/


// Capture Groups