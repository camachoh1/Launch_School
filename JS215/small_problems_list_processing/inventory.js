function transactionsFor(id, transactions) {
  return transactions.filter(obj => {
    return obj.id === id;
  });
}

// solution using forEach: 
function isItemAvailable(id, transactions) {
  let transPerId = transactionsFor(id, transactions);

  let total = 0;

  transPerId.forEach(obj => {
    obj.movement === 'in' ? total += obj.quantity : total -= obj.quantity;
  });

  return total > 0;
}


// solution using reduce:

function isItemAvailable(id, transactions) {
  let transPerId = transactionsFor(id, transactions);

  let total = transPerId.reduce((sum, obj) => {
    return obj.movement === 'in' ? sum += obj.quantity : sum -= obj.quantity;
  }, 0);

  return total > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true


