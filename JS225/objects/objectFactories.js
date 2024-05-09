// write an object factory function that receives a country and a continent and returns an object with a name, continent properties as well as a method getDescription that logs the country and continent interpolated in a message 'country is located in continent.

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      let message = `${this.name} is located in ${this.continent}.`
      if (this.visited) {
        return `${this.name} is located in ${this.continent}. I have visited ${this.name}`
      } else {
        return `${this.name} is located in ${this.continent}. I have not visited ${this.name}`
      }
    },

    visitCountry() {
      this.visited = true;
    },
  }
}

let chile = makeCountry('The Rpublic of Chile', 'South America');
chile.visitCountry()
console.log(chile.getDescription());