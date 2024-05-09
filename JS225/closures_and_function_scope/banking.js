function makeAccount(number) {
    let balance = 0;
    let transactions = [];
  return {
    number() {
      console.log(number);
    },
    balance() {
      console.log(balance);
    },
    transactions() {
      console.log(transactions);
    },

    deposit(amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount: amount});
      return amount;
    },
    withdraw(amount) {
      if (balance < amount) {
        amount = balance;
      }
  
      balance -= amount;
      transactions.push({type: 'withdraw', amount: amount});
      return amount;  
    },
  }
}

function makeBank() {
  let accounts = [];
  return {
    openAccount() {
      let number = 101 + accounts.length;
      let newAccount = makeAccount(number);
      accounts.push(newAccount);
      return newAccount;
    },
    transfer(source, destination, amount) {
      destination.deposit(source.withdraw(amount));
    },
  }
};

let bank = makeBank();
console.log(bank.accounts);
// undefined



