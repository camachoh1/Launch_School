// band countries should be Canada.
// band names should be capitalized.
// remove dots from the band names. 

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function cleanWord(word) {
  let arr = word.split(' ');

  return arr.map(word => {
    return word.split('').filter(char => char.match(/[a-zA-Z]/)).join('');
  }).join(' ');
}

function capitalize(name) {
  return name.split(' ').map(word => {
    if (word.length === 1) {
      return word.toUpperCase();
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  }).join(' ')
}

function fixName(name) {
  let cleanName = cleanWord(name);
  return capitalize(cleanName);
}

function processBands(data) {
  return data.map(band => {
    return {
      name: fixName(band.name),
      country: 'Canada',
      active: band.active,
    }
  });
  
}

console.log(processBands(bands));