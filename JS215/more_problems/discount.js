// problem: 

// given an array containing lists (objects) with product name, quantity and price. 

// Write a function that calculates the total price of all the products. 


// The function should calculate a 25% discount on the most expensive product on the list.

// note that the discount is only calculated on one item even if there are multiple expensive items

// the function returns the total including the discount.

// rules: 
  // the total price is calculated upon two decimals
  // assume the input array will always contain valid objects with valid products and prices.
  // the quantity is used to calculate the total price of each product

// input: an array of objects
// output: a floating number with two decimals 

// data structures: arrays objects 

// algorithm:

// GOAL:
// extract the price and quantity from the input objects
// sort them by price from highest to lowest
// calculate the discount on the most expensive item
// if the quantity of the most expensive item is > 1
// calculate the descount only once
// if there are two different products with the same price
// apply the discount to the first one.
// the total value must have two decimals

// helper function: applyDiscount
// input: a number
// output: a number (discount)

// INITIALIZE percentage variable = 25 / 100
// CALCULATE discount amount = percentage * n
// return discount amount

// helper function: getProductItemsAndQuantities
// ITERATE through the input array
  // MAP each object to an array: [quantity, price]
// END ITERATION

// SORT the resulting array by price from higest to lowest
// RETURN sorted array

// main function: twentyFiveOnOne
// INITIALIZE total variable to 0
// EXTRACT prices and quantities (helper function)
// ITERATE through the prices and quantities array
  // IF subArr index === 0 (the most expensive)
    // total += applyDiscount(subArr[1] * subArr[0])
  // ELSE 
    // total += subArr[1] * subArr[0]
  // END IF
// END ITERATION
// RETURN total with two decimal values



function twentyFiveOnOne(products) {
  let total = 0;
  let pricesQty = getProductPricesAndQuantities(products);
  
  pricesQty.forEach((product, index) => {
    if (index === 0) {
      total += applyDiscount(product[1] * product[0])
    } else {
      total += (product[1] * product[0]);
    }
  });

  return Number.parseFloat(total.toFixed(2));
}

function getProductPricesAndQuantities(arr) {
  let prices = arr.map(product => {
    return [product.quantity, product.price];
  });

  return prices.sort((a,b) => b[1] - a[1]);
}

function applyDiscount(price) {
  let percentage = 25 / 100;
  let discount = price * percentage;
  let total = price - Number(discount.toFixed(2));
  return total;
}


console.log(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]));

console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
])); // 86.96