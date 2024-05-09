// exercise 1: extending interfaces

// Extending interfaces allows us to create a new interface that inherits properties from one or more existing interfaces. It's a powerful feature for code reuse and to maintain a clear hierarchy. In this case, Employee gets all properties from Person, plus an additional employeeId property.

// interface Person {
//   name: string;
//   age: number;
// };

// interface Employee extends Person{
//   employeeId: number;
// };

// const employee: Employee = {
//   name: "coleto",
//   age: 1000,
//   employeeId: 209482,
// }

// console.log(employee);

// exercise 2: intersections

// An intersection type combines multiple types into one. This allows us to "mix" multiple interfaces so that a type has all the members of all the interfaces.

// type Dog = {
//   bark():void;
// }

// type Cat = {
//   meow():void;
// }

// type Pet = Dog & Cat;

// const pet: Pet = {
//   bark: () => console.log('bark'),
//   meow: () => console.log('meow'),
// }

// exercise 3: index signatures
// An index signature specifies the types we expect for keys and values within an object.

// interface StringMap {
//   [key: string]: string;
// }

// const dictionary: StringMap = {
//   elVale: "vale",
//   elColeto: "cole",
//   elBurro: "burro",
// }

// console.log(dictionary);

// exercise 4: keyof

// The keyof type operator creates a union type of all known, public property keys of a given type.

// interface UserData {
//   name: string;
//   id: number;
// }

// function displayUserData(data: UserData, key: keyof UserData): void {
//   console.log(data[key]);
// }

// const data: UserData = {
//   name: "coleto",
//   id: 22344,
// }

// displayUserData(data, "id");

// exercise 5: generic constraints
// Generic constraints limit the types that can be used as arguments for a generic function. In getProperty, K is constrained to be a key of T, making sure that when the function is called, the provided key actually exists on the object. This ensures the safety and correctness of property access at compile-time.

// function getProperty<T,K extends keyof T>(obj: T, key: K):T[K] {
//   return obj[key]
// }

// const obj = {
//   name:"cole",
//   id: 1,
// }

// console.log(getProperty(obj, "id"));


