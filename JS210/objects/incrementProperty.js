let wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(wins, name) {
  if (wins[name]) {
    wins[name] += 1;
  } else {
    wins.name = 1;
  }
  return wins[name];
}

console.log(incrementProperty(wins, 'susie'));   // 5
wins;                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
wins;  