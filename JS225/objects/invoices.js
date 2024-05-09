let invoices = {
  unpaid: [],
  paid: [],

  add(clientName, amountDue) {
    let obj = {};
    obj.name = clientName;
    obj.amount = amountDue;

    this.unpaid.push(obj);
  },

  totalDue() {
    let total = this.unpaid.reduce((total,client) => {
      total += client.amount;
      return total;
    }, 0);

    return total;
  },

  payInvoice(clientName) {
    let unpaid = [];
    this.unpaid.forEach(client => {
      if (clientName === client.name) {
        this.paid.push(client);
      } else {
        unpaid.push(client);
      }
    });
    this.unpaid = unpaid; 
  }, 

  totalPaid() {
    let total = this.paid.reduce((total,client) => {
      total += client.amount;
      return total;
    }, 0);

    return total;
  }
}

invoices.add('coleto', 250);
invoices.add('el vale', 187.50);
invoices.add('tu mae', 300);

console.log(invoices.payInvoice('coleto'));
console.log(invoices.payInvoice('coleto'));
console.log(invoices.payInvoice('tu mae'));

console.log(invoices.paid);
console.log(invoices.unpaid);

console.log(invoices.totalPaid())
console.log(invoices.totalDue())
