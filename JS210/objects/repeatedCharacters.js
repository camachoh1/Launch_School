function repeatedCharacters(str) {
  let resultObj = {};
  let lowercaseStr = str.toLowerCase();

  for (let index = 0; index < lowercaseStr.length; index += 1) {

    if (!resultObj[lowercaseStr[index]]) {
      resultObj[lowercaseStr[index]] = 0;
    }

    resultObj[lowercaseStr[index]] += 1;
  }

  for (let key in resultObj) {
    if (resultObj[key] === 1) {
      delete resultObj[key];
    }
  }
  return resultObj;
}

console.log(repeatedCharacters('Programming'));
// repeatedCharacters('Combination');
