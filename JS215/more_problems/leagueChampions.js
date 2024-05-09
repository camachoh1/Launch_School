// problem:
// create a function that takes an array of football clubs and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.

// input: an array of teams (teams are represented by objects)
// output: a string (tha name of the team with the highest number of points or the largest goal difference)

// rules:
// assume the input will always contain valid elements. 
// the properties of each team are: name, wins, loss, draws, scored, conceded.

// data structures: arrays objects

// algorithm:

// GOAL: iterate through the array of objects and create a 2D array containing name, total points, and difference.
// filter the result 2D array in order to find the team with highest points. if there are multiple teams sharing the highest score, return the one with the greatest goal difference.

// MAP the input array:
  // INITIALIZE variables name, total points, and goal difference
  // RETURN all variables in an array

// extract the total points and goal difference from the mapped array 
// find MAX total points and goal difference.
// FILTER the return value of map based on the total points
// IF filtered array LEN > 1
  // FILTER based on goal difference 
  // RETURN
  // ELSE 
    // RETURN filtered array

function champions(teams) {
  let summary = scoreSummary(teams);

  let maxTotalPoints = Math.max(...summary.map(subarr => subarr[1]));
  let maxGoalDifference =  Math.max(...summary.map(subarr => subarr[2]));

  let champion = summary.filter(team => {
    return team[1] === maxTotalPoints;
  });

  if (champion.length > 1) {
    return champion.filter(team => team[2] === maxGoalDifference)[0][0];
  } else {
    return champion[0][0];
  }
}

function scoreSummary(teams) {
  return teams.map(team => {
    let name = team.name;
    let totalPoints = 3 * team.wins + 0 * team.loss + 1 * team.draws;
    let goalDifference = team.scored - team.conceded;

    return [name, totalPoints, goalDifference];
  });
}

console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ]));

  console.log(champions([
    {
      name: "Manchester United",
      wins: 30,
      loss: 3,
      draws: 5,
      scored: 88,
      conceded: 20,
    },
    {
      name: "Arsenal",
      wins: 30,
      loss: 3,
      draws: 5,
      scored: 98,
      conceded: 29,
    },
    {
      name: "Chelsea",
      wins: 22,
      loss: 8,
      draws: 8,
      scored: 98,
      conceded: 29,
    },
    ]));