// problem: write a function that takes an array as an argument and sorts that array using bublle sort.

// rules:
  // the sorting must be done in place -- the function should mutate the array

  // bubble sorting iterates through an array multiple times n times n is the length of the array
  // during each iteration, each pair of consecutive elements is compared. If the first value is greater than the second, the two elements are swaped else they are left as is.

  // this proces repeats until a complete pass is made without performing any swaps. If no swaps are done, the array is completely sorted. 

  function bubbleSort(arr) {
    while (true) {
      let swapped = false;

      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i - 1] <= arr[i]) {
          continue;
        }

        swap(arr, i - 1, i);
        swapped = true;
      }

      if(!swapped) {
        break;
      }
    }
  }

  function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

const array1 = [5, 3];
console.log(bubbleSort(array1));
console.log(array1);    // [3, 5]
