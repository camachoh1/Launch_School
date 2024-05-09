// problem:

// given an object containing chapter numbers as keys and page number as value, write a function that returns the chapter that is nearest to the page you are currenyly on.

// the current page value is provided as an integer.

// input: an object and a number representing the your current page

// output the chapter nearest to the current page

// all page numbers will be valid integers

// if two pages are equidistant return the one with the highest page number.

// testCases:

// nearestChapter({"chapter a": 1, "chapter b": 5}, 3) // "chapter b"

// nearestChapter({"A1": 2, "b2": 5, "C4": 15},10) // "C4"

// nearestChapter({"A1": 2, "b2": 5, "C4": 15},0) // "A1"

// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) // "Chapter 2"


// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200) // "The End?"

// data structures:  objects arrays 

// GOAL: return the chapter with the lowest difference between the current page and the chapter page. if the chapter page is equidistant return the page with the highest number.

// EXTRACT the entries from the input object
  // transforming the object into a 2D array
// FILTER the 2d array
  // subArr[0] = chapter
  // subArr[1] = page number
  // IF ABS subaArr[1] - current page <= current page
    // RETURN subArr
  // END IF

// IF filtered array LEN === 1
  // RETURN filtered[0][0] 
// ELIF 
  // SORT filtered by SUBARR[1] descending
  // RETURN sortedFiltered[0][0]
//

function nearestChapter(chapters, currentPage) {
  let chaptersArr = Object.entries(chapters);

  let filteredArr = chaptersArr.filter(subArr => {
    return Math.abs(subArr[1] - currentPage) <= currentPage;
  });

  if (filteredArr.length > 1) {
    return filteredArr.sort((a, b) => b[1] - a[1])[0][0];
  } else {
    return filteredArr[0][0];
  }
}

console.log(nearestChapter({"chapter a": 1, "chapter b": 5}, 3)) // "chapter b"

console.log(nearestChapter({"A1": 2, "b2": 5, "C4": 15},10)); // "C4"

console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10)); // "Chapter 2"


console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)); // "The End?"