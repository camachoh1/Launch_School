const today = new Date();


// function formattedDays(date) {
//   let formattedDay = '';
//   let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   return formattedDay = daysOfWeek[date.getDay()];
// }

// function formattedMonth(date) {
//   let formattedMonth = '';
//   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//   return formattedDay = months[date.getMonth()];
// }

// function dateSuffix(date) {
//   let dateString = String(date);

//   let digit;
//   if (dateString.length === 1) {
//     digit = dateString[0];
//   } else if (dateString[0] !== '1') {
//     digit = dateString[1];
//   }

//   let suffix = 'th';
//   if (digit === '1') {
//     suffix = 'st';
//   } else if (digit === '2') {
//     suffix = 'nd';
//   } else if (digit === '3') {
//     suffix = 'rd';
//   }

//   return String(date) + suffix;
// }

// function formattedDate(date) {
//   let day = formattedDays(date);
//   let month = formattedMonth(date);

//   console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
// }


// formattedDate(today);

console.log(today.getFullYear());
console.log(today.getYear());
console.log(today.getTime());
