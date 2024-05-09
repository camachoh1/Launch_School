// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     });
//   },
// };

// the above wont output the desired output because `this` on line 5 is referencing the global object. In order to fix it, we need to make sure the function is using the desired context which is the object franchise. We can do this by capturing the execution context for the allMovies method (which is francise.) in a variable and then using lexical scoping rules to allow the callback function passed as argument to map to have access to the desired context.  

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     let self = this
//     return [1, 2, 3].map(function(number) {
//       return `${self.name} ${number}`;
//     });
//   },
// };

// console.log(franchise.allMovies());

// part 2

// This solution passes a function that is hard bound to the desired context (francise) into map. 

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     let titles = function(number) {
//       return `${this.name} ${number}`; 
//     }.bind(this);
//     return [1, 2, 3].map(titles);
//   },
// };

// alternative solution

// this solution uses the thisArg argument provided by the Array.prototype iterator methods. 

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1,2,3].map(function(number) {
      return `${this.name} ${number}`;
    }, this);
  }
}

console.log(franchise.allMovies());