
function madlibs() {
  let input = require('readline-sync');
  let noun = input.question('Enter a noun: ');
  let verb = input.question('Enter a verb: ');
  let adjective = input.question('Enter an adjective: ');
  let adverb = input.question('Enter an adverb: ');

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
  
}

madlibs()