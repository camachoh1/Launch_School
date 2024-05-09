// exercise 1

// type Contact = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   isOnline: boolean;
// }

// const newContact: Contact = {
//   firstName:'coleto',
//   lastName: 'ordonez',
//   age: 55,
//   isOnline:false,
// };

// console.log(newContact);

// exercise 2
// let employee: {
//   id: number,
//   name: string,
//   department: string,
// } = {
//   id: 24,
//   name: "pedro",
//   department: "sancocho",
// }

// console.log(employee);

// exercise 3

// interface Car {
//   make: string;
//   model: string;
//   year: number;
// }

// const myCar: Car = {
//   make: "cacharro",
//   model: "viejo",
//   year: 1600,
// }

// console.log(myCar);

// exercise 4

// type Device = {
//   manufacturer: string;
//   model: string;
//   year: number;
// }

// const coleto = {
//   manufacturer: "coleto",
//   model: '3000',
//   year: 2023,
//   vacile: true
// }

// const smartPhone: Device = coleto; // allowed due to structural compatibility.
// const computer: Device = {
//   manufacturer: "el loco",
//   model: "lococolo",
//   year: 2015,
// }

// exercise 5
// type Contact = {
//   firstName: string;
//   lastName: string;
//   age?: number;
//   isOnline?: boolean;
// }

// const contact1: Contact = {
//   firstName: "el cole",
//   lastName: "del vacile",
// }

// const contact2: Contact = {
//   firstName: "el man",
//   lastName: "de los bolis",
//   age: 50,
//   isOnline: false,
// }

// const contact3: Contact = {
//   firstName: "el vale",
//   lastName: "de la bolita",
//   isOnline: true,
// }

// console.log(contact1);
// console.log(contact2);
// console.log(contact3);

// exercise 6

// interface Account {
//   username: string;
//   email: string;
//   readonly accountCreationDate: string;
// }

// const newAccount:Account = {
//   username: "elvergalarga2020",
//   email: "tumae@gmail.com",
//   accountCreationDate: "12/2/2022",
// }

// newAccount.username = "elvacilon" // ok
// newAccount.accountCreationDate = "01/01/1991" // Cannot assign to 'accountCreationDate' because it is a read-only property.

// exercise 7

// const randomValue: any = 'hello world';
// let upperCaseValue: string = (randomValue as string).toUpperCase();

// console.log(upperCaseValue);

// exercise 8

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe(): string {
    return `habla ${this.name} your age is ${this.age}`;
  }
}
const person = new Person("Alice", 30);
console.log(person.describe());
