
function createInvoice(services = {}) {
  return {
    payments: [],
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total() {
      return this.internet + this.phone;
    },
    addPayment(payment) {
      this.payments.push(payment);
    },

    addPayments(payments) {
      payments.forEach(payment => {
        this.payments.push(payment);
      });
    },

    paymentTotal() {
      let totalPaid = 0;

      this.payments.forEach(payment => {
        totalPaid += payment.total();
      });

      return totalPaid;
    },

    amountDue() {
      return this.total() - this.paymentTotal();
    }
  } 
}

function createPayment(payments = {}) {
  return {
    phone: payments.phone || 0,
    internet: payments.internet || 0,
    amount: payments.amount,
    total() {
      if (this.amount) {
        return this.amount;
      } else {
        return this.phone + this.internet;
      }
    },
  }
}


let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1)

invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());