// // provided objects

// // let invoice = {
// //     phone: 3000,
// //     internet: 6500,
// // };

// // let payment = {
// //   phone: 1300,
// //   internet: 5500,
// // };

// // let invoiceTotal = invoice.phone + invoice.internet;
// // let paymentTotal = payment.phone + payment.internet;
// // let remainingDue = invoiceTotal - paymentTotal;

// // create a factory function that we can use to create invoices.
//   // returns an invoice object, with `phone` and `internet` properties, and a total method
//   // the default value for the phone service is 3000, and the internet service is 5500 (in cents)
//   // the function takes an object as argument with attributes to override the default values.

// // my solution uses object assign which achieves the desired output however, it mutates the invoice object which may cause issues.
// // function createInvoice(services) {
// //   let invoice = {
// //     phone: 3000,
// //     internet: 5500,
// //     total() {
// //       return this.phone + this.internet;
// //     }
// //   };

// //   if (services) {
// //     return Object.assign(invoice, services);
// //   } else {
// //     return invoice;
// //   }
// // }

// // LS solution does not mutate the object and makes use of default parameter values.

// function createInvoice(services = {}) {
//   let invoice = {
//     phone: services.phone || 3000,
//     internet: services.internet || 5500,
//     payments: [],
//     total() {
//       return this.phone + this.internet;
//     },

//     addPayment(payment) {
//       invoice.payments.push(payment);
//     },
//     addPayments(payments) {
//       payments.forEach(payment => {
//         invoice.addPayment(payment);
//       });
//     },
    
//     paymentTotal() {
//       let totalPaid = 0;
//       let i;

//       for (i = 0; i < invoice.payments.length; i += 1) {
//         totalPaid += invoice.payments[i].total();
//       }

//       return totalPaid;
//     },

//     amountDue() {
//       return this.total() - this.paymentTotal();
//     },
//   };

//   return invoice;
// }

// function invoiceTotal(invoices) {
//   let total = 0;
//   let i;

//   for (i = 0; i < invoices.length; i += 1) {
//     total += invoices[i].total();
//   }

//   return total;
// }

// function createPayment(services) {
//   services = services || {};

//   let payment = {
//     phone: services.phone || 0,
//     internet: services.internet || 0,
//     amount: services.amount,
//     total() {
//       return this.amount || (this.phone + this.internet);
//     },
//   };

//   return payment;
// }

// function paymentTotal(payments) {
//   let total = 0;
//   let i;

//   for (i = 0; i < payments.length; i += 1) {
//     total += payments[i].total();
//   }

//   return total;
// }


// let invoice = createInvoice({
//   phone: 1200,
//   internet: 4000,
// });

// let payment1 = createPayment({
//   amount: 2000,
// });

// let payment2 = createPayment({
//   phone: 1000,
//   internet: 1200,
// });

// let payment3 = createPayment({
//   phone: 1000,
// });

// invoice.addPayment(payment1);
// invoice.addPayments([payment2, payment3]);
// console.log(invoice.amountDue());       // this should return 0



