const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// logs NaN because `this` anywhere outside a function is bound to the global object. If the keyword is used inside a function, then its value depends on how the function was invoked. since window.firstName and window.lastName do not exist in the global object this.firstName + this.lastName, evaluates to undefined + undefined === NaN