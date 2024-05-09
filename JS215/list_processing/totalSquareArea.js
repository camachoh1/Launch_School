function totalArea(rectangles) {
  let areas = rectangles.map((rectangle) => rectangle[0] * rectangle[1])

  return areas.reduce((prev, curr) => prev + curr);
}

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// console.log(totalArea(rectangles));    // 141

function totalSquareArea(rectangles) {
  let squares = rectangles.filter((rectangle) => rectangle[0] === rectangle[1]);

  return totalArea(squares);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121