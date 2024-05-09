// enconding:

// input: a string with a message to enconde and a number of "rails"
// output: a string: the message in rows

// the message is encoded in a zig-zag pattern (downwards on successive rails of an imaginary fence then moving up from the bottom). 

// arrays


function createRails(numberOfrails) {
  let arr = [];

  while (numberOfrails > 0) {
    arr.push(new Array());
    numberOfrails -= 1
  }

  return arr;
}


function encode(message, numberOfrails) {
  let messageArr = message.split('').filter(char => char.match(/[A-Z]/));

  let railsArr = createRails(numberOfrails);
  let rail = 0;
  messageArr.forEach((char, index) => {
    railsArr[rail][index] = char
    rail <= numberOfrails ? rail += 1 : rail -=1;
    // if (rail < numberOfrails) {
    //   railsArr[rail][index] = char;
    //   rail += 1
    // } else if (rail === numberOfrails) {
    //   railsArr[rail][index] = char;
    //   rail -= 1;
    // }
  })
  console.log(railsArr);
}

encode("WE ARE DISCOVERED FLEE AT ONCE", 3)