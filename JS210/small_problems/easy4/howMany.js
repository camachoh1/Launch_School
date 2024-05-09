function countOccurrences(vehicles) {
  let count = {}

  for (let i = 0; i < vehicles.length; i += 1) {
    count[vehicles[i]] = count[vehicles[i]] || 0
    count[vehicles[i]] += 1
  }

  for (let prop in count) {
    console.log(`${prop} => ${count[prop]}`);
  }
}
const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);