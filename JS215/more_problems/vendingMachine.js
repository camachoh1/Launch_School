// problem: given an object of products, write a function that works as a vending machine.

// the function will receive an amount of money and a product number.

// the function should return an object containing the product name and the change in the form of an array.

// if an invalid product number is provided the function should log "enter a valid product number"

// if the amount of money is not valid the function should log " not enough money for this product"

// rules:
// the only values for change are: [500, 200, 100, 50, 20, 10]

// the change array must contain only valid change values and must be sorted in descending order

// if there is no change return an empty array as the change

// test cases:

// vendingMachine(200, 1) // {product: 'Orange Juice', change: [100]}

// vendingMachine(200, 9) // {product: 'Small snack', change: [100, 20]}

 // vendingMachine(200, 7) // { product: "Crackers", change: [ 50, 20, 10 ] }

 // vendingMachine(500, 8) // { product: 'Potato chips', change: [ 200, 50, 20, 10 ] }

// vendingMachine(200, 0) // "invalid product"
// vendingMachine(10, 2) // "not enough money"
// vendingMachine(150, 3) // {product: 'Chocolate snack', change: []}

// data structures: arrays objects

// algorithm:
// GOALS: iterate through the products array and find the product whose product number matches the number provided as input
// if the provided product number is not part of the products array return an error message
// if the money is < the price for the product log error message "not enough money"
// calculate the total change by subtracting the price from the input money

// using the total change format the change array using the valid coins. this can be done by checking how many times the total can fit on each denomination of coins. 


// helper function: getChange
// - input: an integer (total)
// - output: an array with the change ( {product_name: change: []})

// IF total === 0
  // RETURN []
// END IF

// CREATE a valid change constant array which will hold the valid coins
// CREATE a results array
// WHILE total > 0
  // ITERATE THROUGH the change array (for loop)
    // IF total / currentCoin === 1
      // total -= current coin
      // PUSH currentCoin into result
      // BREAK
    // END IF
// END WHILE

// RETURN results array

// main function: vendingMachine

// FILTER input array
  // IF obj[productN]
    // RETURN obj
  // END IF
// END FILTER (RETURN filteredArry)

// IF filteredArry LEN === 0 
  // LOG "Invalid product number"
// END IF

// IF money < price 
  // LOG "not enough money"

// INITIALIZE variable total to the return value of money - price


// RETURN {obj.name, change: GetChange(total)}

const PRODUCTS = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];

function vendingMachine(money, productNumber) {
  let filteredArray = PRODUCTS.filter(product => {
    return product.number === productNumber;
  });

  if (filteredArray.length === 0) {
    return "Invalid product";
  }
  
  let product = filteredArray[0];
  if (money < product.price) {
    return "Not enough money";
  }

  let total = money - product.price;
  
  return {product: product.name, change: getChange(total).sort((a, b) => b - a)};
}

function getChange(total) {
  if (total === 0) {
    return [];
  }
  const change = [500, 200, 100, 50, 20, 10];
  let result = [];

  while (total > 0) {
    for (let i = 0; i < change.length; i += 1) {
      if (Math.floor(total / change[i]) >= 1) {
        total -= change[i];
        result.push(change[i]);
        break;
      }
    }
  }
  return result;
}

// [80]
// [200]


console.log(vendingMachine(200, 1)); // {product: 'Orange Juice', change: [100]}
console.log(vendingMachine(200, 9)); // {product: 'Small snack', change: [100, 20]}
console.log(vendingMachine(200, 7)); // { product: "Crackers", change: [ 50, 20, 10 ] }
console.log(vendingMachine(500, 8)); // { product: 'Potato chips', change: [ 200, 50, 20, 10 ] }

console.log(vendingMachine(200, 0)); // "invalid product"
console.log(vendingMachine(10, 2)); // "not enough money"
console.log(vendingMachine(150, 3)); // {product: 'Chocolate snack', change: []}


