function getHashTags(str) {
  let hashTags = str.match(/[a-z]+/gi).map(word => '#' + word.toLowerCase());

  if (hashTags.length < 3) return hashTags.sort((a, b) => b.length - a.length);

  let sorted = hashTags.sort((a, b) => b.length - a.length);
  let result = [];

  result.push(sorted[0]);

  for (let i = 1; i < sorted.length; i += 1) {
    if (result[result.length - 1].length > sorted[i].length) {
      result.push(sorted[i]);
    }

    if (result.length === 3) break;
  }
  return result;
}

console.log(getHashTags("How the Avocado jajajaa Became the Fruit of the Global Trade"));
// ["#avocado", "#became", "#global"]

console.log(getHashTags("bb bbwwww"));

console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"));
// ["#christmas", "#probably", "#will"]

console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));
// ["#surprise", "#parents", "#fruit"]

console.log(getHashTags("Visualizing Science"));
// ["#visualizing", "#science"]