// // // // we need item creator, item manager, and reports manager

// // // // item creator: makes sure that all necessary information are present and valid. 
// // const ItemCreator = (function() {
// //   function skuCreator(itemName, category) {
// //     let itemWords = itemName.split(' ');
// //     let itemCode;
// //     let categoryCode;

// //     if (itemWords.length === 1) {
// //       itemCode = itemName.slice(0,3);
// //     } else {
// //       if (itemWords[0].length === 2) {
// //         itemCode = itemWords[0].slice(0,2) + itemWords[1].slice(0,1)
// //       } else {
// //         itemCode = itemWords[0].slice(0,3);
// //       }
// //     }
// //     categoryCode = category.slice(0,2);
// //     return itemCode.toUpperCase() + categoryCode.toUpperCase();
// //   }

// //   function validItemName(itemName) {
// //     itemName = itemName.match(/\S/gi).join('');
// //     return itemName.length >= 5;
// //   }

// //   function validCategory(category) {
// //     let words = category.split(' ');
// //     return words.length === 1 && validItemName(words.join(''));
// //   }

// //   function validQty(quantity) {
// //     return typeof quantity === 'number' && !Number.isNaN(quantity);
// //   }

// //   function validItem(itemName, category, quantity) {
// //     return validItemName(itemName) && validCategory(category) && validQty(quantity);
// //   }

// //   return function(itemName, category, quantity) {
// //     if (!validItem(itemName, category, quantity)) {
// //       return { notValid: true };
// //     } else {
// //       this.sku = skuCreator(itemName, category);
// //       this.itemName = itemName;
// //       this.category = category;
// //       this.quantity = quantity;
// //     }
// //   }
// // })();

// // const ItemManager = {
// //   items: [],
// //   create(itemName, category, quantity) {
// //     const newItem = new ItemCreator(itemName, category, quantity);
// //     if (newItem.notValid) {
// //       return false;
// //     } else {
// //       this.items.push(newItem);
// //     }
// //   },

// //   update(sku, object) {
// //     // updates property of item
// //     let item = this.items.filter(item => item.sku === sku)[0]
// //     for (prop in item) {
// //       if (Object.keys(object).includes(prop)) {
// //         item[prop] = object[prop];
// //       }
// //     }
// //   },

// //   delete(sku) {
// //     // deletes item from list
// //     let idx;
// //     this.items.forEach((item, index) => {
// //       if (item.sku === sku) {
// //         idx = index;
// //       }
// //     });

// //     this.items.splice(idx, 1);
// //   },

// //   inStock() {
// //     // lists items with qty > 0
// //     const stock = this.items.filter(item => item.quantity > 0);

// //     return stock;
// //   },

// //   itemsInCategory(category) {
// //     // list all items in category
// //     const cat = this.items.filter(item => item.category === category);

// //     return cat;
// //   },
// // }

// // const ReportManager = {
// //   init(manager) {
// //     // accepts ItemManager and assignes it to the items property
// //     this.item = manager;
// //   },

// //   createReporter(sku) {
// //     const item = this.item.items.filter(item => item.sku === sku)[0];

// //     return {
// //       itemInfo() {
// //         for (prop in item) {
// //           console.log(`${prop}: ${item[prop]}`);
// //         }
// //       }
// //     }
// //   },

// //   reportInStock() {
// //     // logs to the console the item names of all the items that are in stock as a comma separated values.

// //     let inStock = this.item.inStock();
// //     console.log(inStock.map((item) => item.itemName).join(', '));
// //   }
// // }


// // ItemManager.create('basket ball', 'sports', 0);           // valid item
// // ItemManager.create('asd', 'sports', 0);
// // ItemManager.create('soccer ball', 'sports', 5);           // valid item
// // ItemManager.create('football', 'sports');
// // ItemManager.create('football', 'sports', 3);              // valid item
// // ItemManager.create('kitchen pot', 'cooking items', 0);
// // ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// // // console.log(ItemManager.items);
// // // returns list with the 4 valid items

// // ReportManager.init(ItemManager);
// // ReportManager.reportInStock();
// // // logs soccer ball,football,kitchen pot

// // ItemManager.update('SOCSP', { quantity: 0 });
// // console.log(ItemManager.inStock());
// // // returns list with the item objects for football and kitchen pot
// // ReportManager.reportInStock();
// // // logs football,kitchen pot
// // // console.log(ItemManager.itemsInCategory('sports'));
// // // returns list with the item objects for basket ball, soccer ball, and football
// // ItemManager.delete('SOCSP');
// // console.log(ItemManager.items);
// // // returns list with the remaining 3 valid items (soccer ball is removed from the list)

// // const kitchenPotReporter = ReportManager.createReporter('KITCO');
// // kitchenPotReporter.itemInfo();
// // // logs
// // // skuCode: KITCO
// // // itemName: kitchen pot
// // // category: cooking
// // // quantity: 3

// // ItemManager.update('KITCO', { quantity: 10 });
// // kitchenPotReporter.itemInfo();
// // // logs
// // // skuCode: KITCO
// // // itemName: kitchen pot
// // // category: cooking
// // // quantity: 10

// const ItemCreator = (function() {
//   function validName(itemName) {
//     let nameChars = itemName.match(/[a-z0-9]/ig);
//     return nameChars.length >= 5;
//   }

//   function validCategory(category) {
//     let catWords = category.split(' ');
//     return catWords.length === 1 && category.length >= 5;
//   }

//   function validQuantity(quantity) {
//     return typeof quantity === 'number'
//   }

//   function validItem(itemName, category, quantity) {
//     return validName(itemName) && validCategory(category) && validQuantity(quantity)
//   }

//   function generateSku(itemName, category) {
//     let itemWords = itemName.split(' ');
//     let itemCode;

//     if (itemWords.length === 2) {
//       if(itemWords[0].length === 2) {
//         itemCode = itemWords[0] + itemWords[1].slice(0,2) + category.slice(0,2);
//       } else {
//         itemCode = itemWords[0].slice(0,3) + category.slice(0,2)
//       }
//     } else {
//       itemCode = itemWords[0].slice(0,3) + category.slice(0,2);
//     }
//     return itemCode.toUpperCase();
//   }
  
//     return function(itemName, category, quantity) {
//       if (validItem(itemName, category, quantity)) {
//         this.sku = generateSku(itemName, category)
//         this.itemName = itemName;
//         this.category = category;
//         this.quantity = quantity;
//       } else {
//         return {notValid: true}
//       }
//     }
// })();

// const ItemManager = {
//   items: [],

//   getItem(skuCode) {
//     return this.items.filter(item => item.skuCode === skuCode)[0];
//   },

//   create(itemName, category, quantity) {
//     let newItem = new ItemCreator(itemName, category, quantity);
//     if (newItem instanceof ItemCreator) {
//       this.items.push(newItem);
//     } else {
//       return false;
//     }
//   },

//   update(sku, updateData) {
//     let updateItem = this.items.filter(item => item.sku === sku)[0];

//     for (let prop in updateItem) {
//       if (updateData[prop] !== undefined) {
//         updateItem[prop] = updateData[prop];
//       }
//     }
//   },

//   delete(sku) {
//     this.items.splice(this.items.indexOf(this.getItem(sku)), 1)
//   },

//   inStock() {
//     let itemsInStock = this.items.filter(item => item.quantity > 0);
//     return itemsInStock;
//   },

//   itemsInCategory(category) {
//     let itemsInCategory = this.items.filter(item => item.category === category);

//     return itemsInCategory;
//   },
// }

// const ReportManager = {
//   init(manager) {
//     this.items = manager;
//   },

//   createReporter(sku) {
//     let item = this.items.items.filter(item => item[sku] === sku)[0];
//     return {
//       itemInfo() {
//         for (let prop in item) {
//           console.log(`${prop}: ${item[prop]}`);
//         }
//       }
//     }
//   },

//   reportInStock() {
//     let available = this.items.inStock();
//     let names = available.map(({itemName}) => itemName);
//     return names.join(', ')
//   },
// }

// ItemManager.create('basket ball', 'sports', 0);           // valid item
// ItemManager.create('asd', 'sports', 0);
// ItemManager.create('soccer ball', 'sports', 5);           // valid item
// ItemManager.create('football', 'sports');
// ItemManager.create('football', 'sports', 3);              // valid item
// ItemManager.create('kitchen pot', 'cooking items', 0);
// ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// // console.log(ItemManager.items);
// // returns list with the 4 valid items

// ReportManager.init(ItemManager);
// // console.log(ReportManager.reportInStock());
// // // logs soccer ball,football,kitchen pot

// ItemManager.update('SOCSP', { quantity: 0 });
// // console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot
// // console.log(ReportManager.reportInStock());
// // // logs football,kitchen pot
// // console.log(ItemManager.itemsInCategory('sports'));
// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.delete('SOCSP');
// console.log(ItemManager.items);
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

// // const kitchenPotReporter = ReportManager.createReporter('KITCO');
// // kitchenPotReporter.itemInfo();
// // // logs
// // // skuCode: KITCO
// // // itemName: kitchen pot
// // // category: cooking
// // // quantity: 3

// // ItemManager.update('KITCO', { quantity: 10 });
// // kitchenPotReporter.itemInfo();
// // // logs
// // // skuCode: KITCO
// // // itemName: kitchen pot
// // // category: cooking
// // // quantity: 10



const Test = (function() {
  function prettyName(name){
    return `pretty ${name}`
  }

  return function(name) {
    this.name = prettyName(name);
  }
})();

let newTest = new Test('coco');
console.log(newTest.prettyName());