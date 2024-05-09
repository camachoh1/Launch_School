// a 2d array is provided each sub array contains a pair of numbers representing the number of people that got on the bus (first number) number of people that got off the bus (second number).

// Return the number of people who are still on the bus after the last bus stop. The bus might not be empty and some pelople might still be inside the bust.

// the number od people in the bus at the end of the day will always be >= 0 negative return values are not possible. 

// the second value in the first pair in the array is always 0 since the bus is empty in the first bus stop. 

// [[10, 0], [3, 5], [5, 8]] === 5 

// 10 - 0 = 10, (10 - 5) + 3, (8 - 8) + 5 = 5

function busStop(stops) {
  if (stops.length === 1) {
    return stops[0][0];
  }
  
  let currentNumber = stops[0][0];
  let total = 0
  for (let stop = 1; stop < stops.length; stop += 1) {
    let off = stops[stop][1];
    let on  = stops[stop][0];

    total = (currentNumber - off) + on;
    currentNumber = total;
  }

  return total;
}

function busStop(stops) {
  let totalPeople = 0;
  for (let i = 0; i < stops.length; i += 1) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }

  return totalPeople;
}

// busStop([[10,0],[3,5],[5,8]]);
// busStop([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
console.log(busStop([[35,0]]));

