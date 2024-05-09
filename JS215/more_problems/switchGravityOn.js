// problem: given a 2D array of some suspended blocks (represented as hashtags), return another 2D array which shows the end result once gravity is switched on.

// input: a 2d array
// output: a 2D array with its elements rearraged.

// rules:
// the input arrays contain both dashes '-' and hashtags '#'
// the hastags are "suspended" the goal is to move them to the bottom of the 2D array representing gravity having an effect on the blocks.
// the 2D array may contain sub arrays that are largest than the main array: example [[1,2,1,2],[1,2,3,4],[1,2,3,4]] in this example the main array has length of 3 while the sub arrays have lenght of 4.

// data structures: arrays

// algorithm: 
// GOALS: iterate through the 2D array by columns
// if the current object is a hash and the next object (in the column) is a dash, switch positions (helper function)
// else leave as is 

// helper function: switch
// input: a 2D array two index (rowfirst and rowSecond)
// output a 2D array re-arranged

// CREATE a temp variable and initialize it to the first object (arr[first row])
// ASSIGN the first row to the second row
// ASSIGN the second to the first
// CREATE a second variable and initialize it to the second object (arr[second column][second row])

// ASSIGN temp to second
// ASSIGN second to first
// ASSIGN first to temp

// return the re-arranged array

// main function: switchGravityOn
// CREATE a variable maxLength initialize it to arr[0] LEN
// ITERATE through the input array from 1 to maxLength (row = 0)
  // ITERATE through the subArrays from 1 to arr LEN (column = 1)
    // current = arr[column - 1][row]
    // next = arr[column][row]
    // IF row <= column
      // IF current === '#' AND next === '-'
        // SwITCH (helper function)
      // END IF
    // END IF
  // END FOR
// END FOR

// RETURN array


// output a 2D array re-arranged

// CREATE a temp variable 

// ASSIGN temp to first
// ASSIGN first to second
// ASSIGN second to temp

// return the re-arranged array

function switchArr(arr, rowFirst, rowSecond) {
  let temp = arr[rowFirst];
  arr[rowFirst] = arr[rowSecond];
  arr[rowSecond] = temp;

  return arr;
}



console.log(switchArr([['#'], ['-']], 0, 1));

// a = 1 b = 2 => temp = b, b = a, a = temp => a = 2, b = 1