// problem: given an array nums and an integer key
// count the number of times a target (number in nums) follow a key in nums. 


// rules: 

// key = nums[i]
// target = nums[i + 1]
// if nums[i] === key 
// count target appearance


// data structure: object, arrays

// algorithm: 
// GOALS: iterate through nums checking the current value and the next value
// if the current value [i - 1] === key 
// add next value to the count object
  // if there is no key that is equals to the next value [i]
  // create an entry in the object and initialize it to 1
  // if it exist add one to the value


// extract all entries from the object and sort by value in descending order and return the key. 

// [1, 100, 200, 1, 100] 1 

// i = 4

// current = i - 1
// next  = i 

// nums[current] === key 
  // !obj[nums[next]] 
    // obj[nums[next]] = 1
  // else 
  //obj[nums[next]] += 1 

  function mostFrequent(nums, key) {
    const countObj = {};
  
    for (let i = 1; i < nums.length; i += 1) {
      const current = i - 1;
      const next = i;
  
      if (nums[current] === key) {
        if (!countObj[nums[next]]) {
          countObj[nums[next]] = 1;
        } else {
          countObj[nums[next]] += 1;
        }
      }
    }
  
    if (Object.keys(countObj).length > 1) {
      let entries = Object.entries(countObj).sort((a, b) => b[1] - a[1]);
      return entries[0][0];
    } else {
      return Object.keys(countObj)[0];
    }
  }
  
  // test cases: 
  
  console.log(mostFrequent([1,2], 1)) // 2 
  console.log(mostFrequent([1, 100, 200, 1, 100], 1)) // 100
  console.log(mostFrequent([2,2,2,2,3], 2)) // 2
  console.log(mostFrequent([100, 1, 200, 100, 1, 200], 1)) // 200
  console.log(mostFrequent([1, 100, 100, 200], 1)) // 100