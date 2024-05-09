// problem:

// create a function that takes an array containing strings representing botton inputs and return the final state of the button

// rules:
  // the valid states are: like, dislike.
  // the function returns the state of the button at the end of the iteration or nothing depending on the following conditions:

  // if the state of a button is repeated in succession, the current state is cancelled and becomes "nothing".
  
  //[like, like]
  // on first iteration: current state = like
  // on second iteration: current state = "nothing"


  // if the input array is empty return "nothing"

  // otherwise if the contiguous states are diferent, then they replace each other

  // [like, dislike]
  // on first iteration: current state = like
  // on second iteration: current state = dislike

  // questions:
  // what if the input arrays contains strings other than like and dislike? ("", numbers, special characters)
  // can the arrays be sparsed?
  // what if the input array contain values other than strings?
    // undefined, null, NaN, etc...
  
  // examples:
    // likeOrDislike([]) // nothing
    // likeOrDislike([""]) // nothing
    // likeOrDislike(["like", "like"]) // nothing
    // likeOrDislike(["like", "dislike", "dislike"]) // nothing

    // likeOrDislike(["like, like"]) // like
    // likeOrDislike(["like, "dislile", "like"]) // like
    // likeorDislike(["dislike", "dislike", "like", "dislike"]) // dislike

    // likeOrDislike(["", "like", "dislike"]) // dislike
    // likeOrDislike(["like", 3, "dislike"]) // dislike
    // likeOrDislike(["like",,"dislike",,"like"]) // like

  //data structures: arrays

  // algorithm:
    // filter the input array to only allow valid states.
      // if the array contain any values that are not valid states, they should be removed.
    
    // declare a variable to keep track of the current state initialize it to an empty string

    // iterate through the input array with index
      // using a for loop the incrementer value starting at 1
      // compare values at index - 1 and index.
      


function validState(state) {
  return state === "like" || state === "dislike";
}

function likeOrDislike(arr) {
  if (arr.length === 0) return "nothing";
  let cleanArr = arr.filter(validState);
  let currentState = "nothing";

  cleanArr.forEach((state, index) => {
    if (cleanArr[index] === cleanArr[index - 1]) {
      currentState = "nothing";
    } else {
      currentState = cleanArr[index];
    }
  });


  // for (let i = 1; i < cleanArr.length; i += 1) {
  //   if (cleanArr[i] === cleanArr[i - 1]) {
  //     currentState = "nothing";
  //   } else {
  //     currentState = cleanArr[i];
  //   }
  // }
  return currentState;
}

    console.log(likeOrDislike([])) // nothing
    console.log(likeOrDislike([""])) // nothing
    console.log(likeOrDislike(["like", "like"])) // nothing
    console.log(likeOrDislike(["like", "dislike", "dislike"])) // nothi
    
    
    console.log(likeOrDislike(["like, like"])) // nothing
    console.log(likeOrDislike(["like", "dislike", "like"])) // like
    console.log(likeOrDislike(["dislike", "dislike", "like", "dislike"])) // dislike

    console.log(likeOrDislike(["", "like", "dislike"])) // dislike
    console.log(likeOrDislike(["like", 3, "dislike"])) // dislike
    console.log(likeOrDislike(["like",,"dislike",,"like"])) // like