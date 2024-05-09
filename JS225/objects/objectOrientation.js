let createProduct = function(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    assignPrice(newPrice) {
      if (newPrice < 0) {
        alert('Invalid Price');
      } else {
        this.price = newPrice;
      }
    },

    describe() {
      console.log("Name:" + this.name);
      console.log("ID:" + this.id);
      console.log("Stock:" + this.stock);
      console.log("Price: $" + this.price);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 10, 8);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let saw = createProduct(2, 'Circular Saw', 12, 95);
let hammer = createProduct(3, 'Sledge Hammer', 78, 45);
let boxCutter = createProduct(4, 'Box Cutter', 41, 15);

console.log(scissors === drill);