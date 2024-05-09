// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }

// greet("hello", new Date());

// let msg = "hello there!";

// const numbersInStringFormat = ["10", "20", "30", "40"];

// function convertToNumbers(arr: string[]):number[] {
//   return arr.map(Number);
// }


// console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]


// type Operation = "add"|  "multiply" | "subtract" | "divide";

// function calculate(operation:Operation, a: number,b: number): number {
//     switch (operation) {
//       case "add":
//         return a + b;
//       case "subtract":
//         return a - b;
//       case "multiply":
//         return a * b;
//       case "divide":
//         return a / b;
//       default:
//         throw new Error("Invalid operation");
//     }
//   }

// tuples
// const aTuple: [boolean, number, string] = [true, 2, "hola"];

// aTuple[4] // has no element at index 4
// aTuple[1] = "2" // string is not asignable to type number
// aTuple.push(4) //  wont raise an error | avoid using push() pop() on tuples
// aTuple.push(undefined) // not assignable

// const myArray: (string|boolean)[] = ["is", "launch school", "awesome", true, "or", false];

// function convertToNumbers(arr: string[]): number[] {
//   return arr.map(el => Number(el));
// }

// let numArr: number[] = convertToNumbers(['1', '2']);

// console.log(numArr);

// type Operations = "add" | "subtract" | "multiply" | "divide";

// function calculate(operation: Operations, a: number, b: number) {
//   switch (operation) {
//     case "add":
//       return a + b;
//     case "subtract":
//       return a - b;
//     case "multiply":
//       return a * b;
//     case "divide":
//       return a / b;
//     default:
//       throw new Error("Invalid operation");
//   }
// }

// type addFunction = (a: number, b:number) => number;

// const add: addFunction = (a, b) => a + b;

// console.log(add(1,2)) // 3
// // add("1", 2) // error;

// function myFunc({length}: string[]): number {
//   return length;
// }

// optional properties
// interface UserInfo {
//   name: string;
//   email?: string;
//   age?: number;
// }

// function displayUserInfo(info: UserInfo): string {
//   return `Name: ${info.name}, Email: ${info.email ? info.email : "no email"}, Age: ${info.age ? info.age : "unknown age"}`;
// }

// const user1: UserInfo = {
//   name: "coleto",
//   email: "balurdo@balurdo.com",
//   age: 50,
// }

// const user2: UserInfo =  {
//   name: "burro",
// }

// console.log(displayUserInfo(user1));
// console.log(displayUserInfo(user2));

// interface Point {
//   readonly x: number;
//   readonly y: number;
// }

// function movePoint(point: Point, dx: number, dy: number): Point {
//   const newPoint: Point = {
//     x: point.x + dx,
//     y: point.y + dy,
//   }

//   return newPoint;
// }

// const newPoint = movePoint({x: 3, y: 4}, 2, 2);
// console.log(newPoint);

// let variable = {
//   name: "pedro",
//   age: 32,
// }

// let numArr: number[] = [1, 2, 3];
// let strArr = numArr.map((el) => el.toString());
// strArr = numArr

// function processObject(obj: { name: string; value: number }) {
//   console.log(`The name is ${obj.name} and the value is ${obj.value}`);
// }

// processObject({name: "hahaha", value: 1});

// type union

// type Value = string | number

// function concatenateOrAdd(a: string, b:string): string;
// function concatenateOrAdd(a: number, b:number): number;
// function concatenateOrAdd(a: Value , b: Value): Value {
//   if (typeof a === "string" && typeof b === "string") {
//     return `${a} ${b}`
//   } else if (typeof a === "number" && typeof b === "number"){
//     return a + b;
//   } else {
//     throw new Error("error");
//   }
// }

// const resultStr = concatenateOrAdd("hello", "world");
// const resultNum = concatenateOrAdd(1, 2); // 3

// const resultStr1: string = concatenateOrAdd("hello", "world");
// const resultNum1:number = concatenateOrAdd(1, 2); // 3

// function first<T>(arr: T[]): T {
//   return arr[0];
// }

// const myNum = first([1,2,3]);
// const otherNum: number = first<number>([1,2,3])

// const myStr = first(["a", "b", "c"]);
// const otherStr: string = first<string>(["a", "b", "c"]);


// generic functions
// function pair<T>(el1: T, el2: T): T[] {
//   return [el1, el2];
// }
// const pairOfNumbers = pair(1, 2); // returns [1, 2]
// const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]

// // const pairArr = first("hello", 1) // cant pass arguments of different types TypeScript infers T based on the first argument.

// // the above only works if we make T a union string | number

// // const pairArr = first<string | number>("hello", 1) 

// console.log(pairOfNumbers);
// console.log(pairOfStrings);

// generic objects
// type User<T> = {
// 	name: string;
// 	age: T;
// };

// const user1:User<string> = {
//   name: "coleto",
//   age: "treinta",
// }


// type KeyValuePairs<T, U> = {
//   key: T;
//   values: U[];
// };

// const myPairs: KeyValuePairs<string, number> = {
//   key: "Numbers",
//   values: [1, 2, 3, 4, 5],
// };

// const yourPairs: KeyValuePairs<number, string | number> = {
//   key: 42,
//   values: ["One", "Two", 3, "Four"],
// };

// type Student = {
// 	name: string;
// 	studentNumber: number;
// }

// type Employee = {
// 	name: string;
// 	employeeNumber: number;
// }

// type Person = Student | Employee

// function describePerson(person: Person) {
// 	console.log(person.name) // ok
// 	console.log(person.employeeNumber) //employeeNumber do not exist on type Person
// 	console.log(person.studentNumber) //studentNumber do not exist on type Person.
// }

// const student: Student = {
// 	name: "coleto",
// 	studentNumber: 334,
// }

// const worker: Employee = {
// 	name: "vale",
// 	employeeNumber: 3553,
// }

// describePerson(student);
// describePerson(worker);

// type Vehicle = { make: string; model: string; year: number };
// type Motorcycle = Vehicle & { type: "motorcycle" };
// type Car = Vehicle & { type: "car"; doors: number };

// function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
//   return "doors" in vehicle;
// }

// // Usage
// let myCar: Car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2021,
//   type: "car",
//   doors: 4,
// };

// if (isCar(myCar)) {
//   console.log(myCar.doors);
// }

// discriminated unions

// type Dog = {
//   type: "dog";
//   bark: string;
// }

// type Cat = {
//   type: "cat";
//   whiskers: "gato";
// }

// type Animal = Dog | Cat;

// function describeAnimal(animal: Animal): string{
//   switch(animal.type) {
//     case "dog":
//       return `${animal.bark}`;
//       break;
//     case "cat":
//       return `${animal.whiskers}`;
//       break;
//   }
// }

// type Student = {
// 	role: "student";
// 	studentId: number;
// }

// type Employee = {
// 	role: "employee";
// 	employeeId: number;
// }

// type Retiree = {
// 	role: "retiree";
// 	age: number;
// }

// type Person = Student | Employee | Retiree;

// function describePerson(person: Person):void {
// 	switch(person.role) {
// 		case "student":
// 		console.log(`${person.studentId}`);
//     break;
// 		case "employee":
// 		console.log(`${person.employeeId}`);
//     break;
//     case "retiree":
//       console.log(`Retired at age: ${person.age}`);
//       break;
// 		default:
// 		//applying exhaustiveness checking with never
//     // Type 'Retiree' is not assignable to type 'never'.
// 		const __exhaustiveCheck:never = person
// 		throw new Error(`invalid person type: ${JSON.stringify(__exhaustiveCheck)}`);
// 	}
// }

// const student: Student = {
//   role: "student",
//   studentId: 908234,
// }

// const employee: Employee = {
//   role: "employee",
//   employeeId: 2312,
// }

// const retiree: Retiree = {
//   role: "retiree",
//   age: 67,
// }

// describePerson(student); // 908234
// describePerson(employee); // 2312
// describePerson(retiree); // Retired at age: 67

// type Elephant = {
//   kind: "elephant";
//   weight: number;
// };

// type Tiger = {
//   kind: "tiger";
//   speed: number;
// };

// type Peacock = {
//   kind: "peacock";
//   featherLength: number;
// };

// type Animal = Elephant | Tiger | Peacock;

// function describeAnimal(animal: Animal): string {
//   switch(animal.kind) {
//     case "elephant":
//       return `weight: ${animal.weight}`;
//       break
//     case "tiger":
//       return `speed: ${animal.speed}`;
//       break;
//     case "peacock":
//     return `Feather length: ${animal.featherLength}`;
//     break
//     default:
//       const __exhaustiveCheck: never = animal;
//       throw new Error(`error: ${JSON.stringify(__exhaustiveCheck)}`);
//   }
// }

// type Input = string | number | {length: number};
// function processInput(input: Input):void {
//   if (typeof input === "string") {
//     console.log(input.toUpperCase());
//     console.log(input.length);
//   } else if (typeof input === "number") {
//     console.log(input.toFixed(2));
//   } else {
//     console.log("tu mae");
//   }
// }

// processInput(true);

// function processValue(value: unknown) {
//   if (typeof value === "string") {
//     console.log(value.toLowerCase());
//   } else if (typeof value === "number") {
//     console.log(value.toFixed(2));
//   } else {
//     console.log("Unknown value");
//   }
// }

// const value: unknown = "string";

// if (typeof value === "string") {
//   console.log(value.toUpperCase())
// } else {
//   console.log(value);
// }

// processValue("Launch School"); // prints "launch school"
// processValue(3.14159); // prints "3.14"
// processValue(value); // prints "Unknown value"

// type ComplexType = string | number | number[];// wider 

// type CustomType = {name: string; age:number} | ComplexType;

// function testFunction(el: ComplexType): void {
//   let myStr: string;
//   if (typeof el === "string") {
//     myStr = el;
//     console.log(myStr);
//   } else  {
//     console.log("not a string");
//   }
// }

// testFunction(1);

// type ComplexType = string | number | (string | number)[];// wider 

// function getLengthOfArray(element: (string | number)[]): number;
// function getLengthOfArray(element: string | number): string;
// function getLengthOfArray(element: ComplexType): number | string {
//   if (Array.isArray(element)) {
//     return element.length;
//   } else {
//     return "not an array";
//   }
// }

// let myArrLength = getLengthOfArray([1,2,3]); // return value type is number |  string
// let myArrLength2 = getLengthOfArray("hello");
// console.log(typeof myArrLength);


// function first<T>(arr: T[]): T {
//   return arr[0];
// }

// const myNum: number = first<number>([1,2,3]);
// const myStr: string = first<string>(["1", "1"]);
// const myBool: boolean = first([true, false]);
// const myElement = first(["hello", 12]);


// type Person<T, T2> = {
//   name: T;
//   id: T2;
// }

// const pedro: Person<string, string> = {
//   name: "pedro",
//   id: "AD4535C",
// }

// const joe: Person<string, number> = {
//   name: "joe",
//   id: 233445
// };

// const number: Array<number> = [1,2,3];
// const mixed: Array<number | string> = [1, "a"];
// const mixed2: (string | number)[] = [1, "s"];

// type Student = {
//   name: string;
//   age: number;
//   studentId: number;
// }

// type Employee = {
//   name: string;
//   age:number;
//   employeeId: number;
// }

// type Person = Student | Employee;

// function isStudent(person: Person): person is Student {
//   return "studentId" in person;
// }

// function describePerson(person: Person):void {
//   isStudent(person) && console.log(`this is the student id: ${person.studentId}`);
// }




// type Circle = {
//   radius: number;
//   opacity?: number;
// };

// type Square = {
//   sideLength: number;
// };

// type Shape = Circle | Square;

// function logOpacity(shape: Shape):void {
//   "opacity" in shape && console.log(shape.opacity);
// }

// const cir: Circle = {radius: 2, opacity: 3}

// console.log();


// function isNumber(el: any): el is number {
//   return Number(String(el)) === el;
// }

// // example 1
// let x: any = "Launch School";
// const y: number = x;
// // console.log(y);

// // example 2
// // let x: any = "Launch School";
// // const y: number = x as number;

// if (isNumber(12)) {
//   console.log('aaaro')
// } else {
//   console.log('na compa')
// }

// function safeGet<T>(arr: T[], index: number) {
//   if (index >= 0 && index <= arr.length) {
//     return arr[index];
//   } else {
//     return undefined;
//   }
// }

// const names: string[] = ["John", "Jane"];
// const name1 = safeGet(names, 2); // Should return undefined
// console.log(name1);
// const numbers: number[] = [1, 2, 3];
// const number = safeGet(numbers, 1); // Should return 2
// console.log(number);

// declaration merging
// interface Mammal {
// 	legs: number;
// }

// interface Mammal {
// 	color: string;
// }
// // subsequent declaration must have the same property type.
// interface Mammal {
// 	color: number;
// }

// // no errors. after declaration merging, the mamal type ended up with properties legs and color. 
// const animal: Mammal = {
//   legs:4,
//   color: "grey",
// }

// type Mammal =  {
// 	legs: number;
// }
// // duplicate identifier, declaration merging does not work with type aliases.
// type Mammal =  {
// 	color: string;
// }

// interface User {
//   id: string;
//   name: string;
// }

// interface Student extends User {
//   id: number;
// }


// interface Animal {
//   name: string;
//   makeSound():string;
// }

// interface Dog extends Animal{
//   fetch(): string;
// }

// using class syntax

// class Animal implements Animal{
//   constructor(name:string) {
//     this.name = name;
//   }

//   makeSound() {
//     return "sound";
//   }
// }

// class Dog extends Animal implements Dog{
//   constructor(name: string) {
//     super(name);
//   }

//   fetch() {
//     return `${this.name} fetches`
//   }
// }

// const myDog = new Dog("Rex");
// console.log(myDog.fetch());

// using an object literal

// const myDog: Dog = {
//   name: "rex",
//   makeSound: () => "sound",
//   fetch: () => "rex fetching",
// }

// console.log(myDog);

// type intersections
// type Product = {
//   name: string;
//   price: number;
// };

// type Shipping = {
//   weight: number;
//   shippingCost: number;
// };

// type ShippableProduct = Product & Shipping;

// interface Product {
//   name: string;
//   price: number;
// };

// interface Shipping {
//   weight: number;
//   shippingCost: number;
// };

// interface ShippableProduct extends Product, Shipping {};

// const newProduct: ShippableProduct = {
//   name: "dssf",
//   price: 1212,
//   weight: 33,
//   shippingCost: 344.55,
// }

// index signatures

// interface Users {
//   [key: string]: string | number | Account;
//   readonly id: number;
// }

// interface Account {
//   username: string;
//   email: string
// }

// const user1: Users = {
//   name: "helo",
//   age: 9,
//   id: 3993,
//   account: {
//     username: "coleto0303",
//     email: "email.com"
//   }
// }

// type User = Map<number, string>;

// const user: User = new Map();
// user.set(1, "jane");
// user.set(2,"60");
// user.set(3, "female");

// console.log(Object.keys(user).every(key => key === "number"));

// interface myArrayLike<T> {
// 	length: number;	
// 	[index: number]: T;
// }

// const emails:myArrayLike<string> = {
// 	length: 2,
// 	0: "email1.com",
// 	1: "email2.com",
// }

// console.log(emails[0]);
// console.log(emails[1]);
// console.log(emails.length);

// type CustomArray = {
//   [index: number]: string | number;
// };

// const customArray: CustomArray = ["apple", 42, "banana"];
// const customArray2: CustomArray = {
//   0: "apple",
//   1: 42,
//   2: "banana",
// }

// function processCustomArray(el: CustomArray) {
//   if (Array.isArray(el)) {
//     return el.filter(value => {
//       return typeof value === "string";
//     }).map(str => str.toUpperCase());
//   }
//   return [];
// }

// // console.log(processCustomArray(customArray2));
// interface CustomObject {
//   [key: string]: unknown;
// }

// interface Person extends CustomObject {
//   firstName: string;
//   lastName: string;
// }


// function doSomething(obj: CustomObject) {
//   console.log(typeof obj.name)
// }
// const obj2: CustomObject = {
//   firstName: "sss",
//   lastName: 'ddd',
//   age: 22,
// }

// const obj: Person = {
//   firstName: "sss",
//   lastName: 'ddd',
//   age: 22,
// }

// interface CustomObj {
//   [key:string]: unknown;
// }

// function getProperty<T>(obj: CustomObj, key: string):T {
//   return obj[key];
// }

// const obj: CustomObj = {
//   a: 1,
// }

// const myValue:number = getProperty<number>(obj, "a");
// console.log(myValue)


// Problem 1
// define the shape of ApiData
// add type annotations to the following code

// function getFakeApiData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (Math.random() < 0.5) res({ name: 'bob', age: 43 });
//       else rej(new Error('network error'));
//     }, 1000);
//   })
// }

// function logData() {
//   getFakeApiData()
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));
// }

// logData();

// Problem 2
// create an interface for "ApiData" to accommodate future additional key-value pairs
// add type annotations where missing
// update the function getUser and associated code below with type annotations and to explicitly handle non-existant ids (return null)

// interface UserData {
//   name: string,
//   id: number,
// }

// function getUser(data: unknown, id: number): UserData {
//   let idx = data.users.findIndex(obj => obj.id === id);
//   return data.users[idx];
// }

// function getApiData() {
//   return {
//     status: 'success',
//     users: [
//       {name: 'john', id: 2},
//       {name: 'mike', id: 4},
//     ],
//   }
// }

// const data = getApiData();

// const user2: UserData = getUser(data, 2);
// console.log(user2); // {name: 'john', id: 2}

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// interface Person {
//   name: string;
//   age: number;
// }

// let pedro: Person = {
//   name: "pedro",
//   age: 55,
// }

// console.log(getProperty(pedro, "name"));

// interface Person {
//   name: string;
//   age: number;
//   greet():void;
// }

// class Person implements Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`hello my name is: ${this.name}, my age is ${this.age}`);
//   }
// }

// const pedro = new Person("pedro", 44);
// pedro.greet();

// class Student extends Person {
//   #studentId: number;

//   constructor(name: string, age: number, studentId: number) {
//     super(name, age);
//     this.#studentId = studentId;
//   }

//   greet() {
//     console.log(`hi i am a student, my name is ${this.name}, my age is ${this.age}`);
//   }

//   showStudentId(): void {
//     console.log(`Student Id: ${this.#studentId}`);
//   }

// }

// const student: Student = new Student("coleto", 30, 33322);
// student.greet();
// student.showStudentId();



// Problem 2
// create an interface for "ApiData" to accommodate future additional key-value pairs
// add type annotations where missing
// update the function getUser and associated code below with type annotations and to explicitly handle non-existant ids (return null)

// interface ApiData {
//   [key: string]: unknown;
//   status: string;
//   users: Array<{name: string, id:number}>;
// }

// interface UserData {
//   name: string,
//   id: number,
// }

// function isValidData(data: unknown): data is ApiData {
//   return typeof data === "object" &&
//           data !== null && "status" in data && "users" in data;
// }

// function getUser(data: unknown, id: number): UserData | null{
//   if (isValidData(data)) {
//     let idx = data.users.findIndex(obj => obj.id === id);
//     if (idx >= 0) {
//       let result: UserData = data.users[idx];
//       return result
//     } else {
//       return null;
//     }
//   } else {
//     throw new Error("invalid data");
//   }
// }

// function getApiData() {
//   return {
//     status: 'success',
//     users: [
//       {name: 'john', id: 2},
//       {name: 'mike', id: 4},
//     ],
//   }
// }

// const data = getApiData();

// const user2: UserData | null = getUser(data, 2);
// console.log(user2); // {name: 'john', id: 2}

// interface Shape {
//   color: string;
// }

// interface Rectangle extends Shape {
//   type: "rectangle"
//   length: number;
//   width: number;
// }

// interface Circle extends Shape {
//   type: "circle";
//   radius: number;
// }

// function displayShapeInfo(shape: Shape): string {
//   return `this shape is ${shape.color}`; 
// }

// interface NameOptions {
//   firstName?: string;
//   lastName?: string;
//   title?: string;
// }

// function formatName({
//   firstName = "john",
//   lastName = "doe",
//   title,
// }: NameOptions): string {
//   return `${title || ''} ${firstName} ${lastName}`;
// }

// const formattedName = formatName({
//   firstName: "Jane",
//   lastName: "Smith",
//   title: "Dr.",
// });

// console.log(formattedName); // "Dr. Jane Smith"
// console.log(formatName({})); // John Doe

// function sqrt(x: number): number {
//   if (x < 0) {
//     throw new Error("Cannot calculate square root of a negative number");
//   }
//   return Math.sqrt(x);
// }

// function safeSqrt(x: number): number {
//   try {
//     return sqrt(x);
//   } catch(e: unknown) {
//   if (e instanceof Error) {
//     return -1;
//   } else 
//     throw e;
//   }
// }

// async function getData(url: string): Promise<void> {
//   const response = await fetch(url);
//   const data = response.json();
//   console.log(data);
// }

// Problem 1
// define the shape of ApiData
// add type annotations to the following code

// function getFakeApiData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (Math.random() < 0.5) res({ name: 'bob', age: 43 });
//       else rej(new Error('network error'));
//     }, 1000);
//   })
// }

// function logData() {
//   getFakeApiData()
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));
// }

// logData();


// interface ValidResponse {
//   name: string;
//   age: number;
// }
// function getFakeApiData():Promise<ValidResponse> {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (Math.random() < 0.5) res({ name: 'bob', age: 43 });
//       else rej(new Error('network error'));
//     }, 1000);
//   })
// }

// async function logData():Promise<void> {
//   try {
//     const response = await getFakeApiData()
//     console.log(response);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.log(error.message);
//     } else {
//       throw new Error("error raro compa");
//     }
//   }
// }

// logData();

// function addNumbers(a: number, b: number): number {
//   return a + b;
// }

// type AddNumbersParams = Parameters<typeof addNumbers>;
// type AddNumbersReturnType = ReturnType<typeof addNumbers>;

// type AddNumbersFunction = (...args: AddNumbersParams) => AddNumbersReturnType;

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Sample Product",
//     price: 49.99,
//     description: "A sample product for demonstration",
//   },
// ];


// function updateProduct(
//   productId: number,
//   updatedValues: Partial<Product>
// ): void {

//   const index = products.findIndex(obj => obj.id === productId);
//   if (index >= 0) {
    
//     products[index] = {...products[index], ...updatedValues}
//     console.log(products);
//   } else {
//     console.log("nada");
//   }
//   // Your implementation here:
//   // Find product to update by productId
//   // If found, apply partial update with using object spreading
//   // Else log out "Product not found"
// }

// updateProduct(1, {
//   name: "Updated Product Name",
//   price: 99.99,
// });

// function createPerson(name: string, age: number, ...stuff:string[]) {
//   return {name, age, stuff};
// }

// type CreatePerson = typeof createPerson;
// type Person = ReturnType<CreatePerson>;
// type Employee = Person & {
//   employeeId: number;
// }

// type PersonParameters = Parameters<CreatePerson>

// const params: PersonParameters = ["cole", 1999, "a", "b", "c"];


// // const bob: Person = {name: "bob", age: 90};
// // const pepe: Employee = {name: "pepe", age:44, employeeId:44332};

// // function greetPerson(person: Person) {
// //   console.log(person.name, person.age);
// // }


// console.log(createPerson(...params));


// function addNumbers(a: number, b: number): number {
//   return a + b;
// }

// type AddNumbersParams = Parameters<typeof addNumbers>;
// type AddNumbersReturnType = ReturnType<typeof addNumbers>;

// type AddNumbersFunction = (args: AddNumbersParams) => AddNumbersReturnType;

// interface Person {
//   name: string; 
//   age: number;
// };
// interface Employee extends Person{
//   employeeId: number;
// };

// const employee: Employee = {
//   name: "bob",
//   age: 90,
//   employeeId: 99484,
// };

// interface Dog {
//   bark():void;
// }

// interface Cat {
//   meow():void;
// }

// type Pet =  Cat & Dog;

// const pet: Pet = {
//   bark(): void {
//     console.log("woof");
//   },

//   meow(): void {
//     console.log("meow");
//   }
// }

// pet.bark();
// // Output should be "Woof"
// pet.meow();
// // Output should be "Meow"

// interface StringMap {
//   [key: string]: string;
// }

// const dictionary: StringMap = {
//   a: "1",
//   b: "2",
// }

// interface UserData {
//   name: string;
//   id: number;
// }

// type User = keyof UserData;

// const user: UserData = {
//   name: "boo",
//   id: 333,
// }

// function showValue(obj: UserData, key: User):void {
//   console.log(obj[key]);
// }

// showValue(user, "name");

// function getProperty<T, K extends keyof T>(obj: T, key:K):T[K] {
//   return obj[key];
// }

// interface Person {
//   name: string;
//   id: number;
// }

// const pedro: Person = {
//   name: "pedro",
//   id: 334
// }

// console.log(getProperty(pedro, "coleto"));

// function func(element: string | undefined):void {
//   (element && element.length > 0) && console.log("input is defined and not empty");
// }

// func("kijh");


// interview prep

// The differences between build time and runtime 

// TS features are present during build-time, type safety measures such as type annotations and structural typing are all implemented and executed during build time.

//After compilation TS code is compiled into JS which is then executed in the runtime environment (node.js or the web).

// when compiled into JS all TS features and syntax are removed. 

// Primitive and complex types 

// TS primitives: string, number, boolean, null, undefined, bigint and symbol
// string: represents textual information
// number: represents numeric values including floating point numbers
// boolean: represent logical values such as true and false
// null: intentional absence of a value
// unfeined: complete absence of a value.

// type annotations:
// allow us to specify the types for our variables, function in/out, and objects. 

// let myNum: number = 5;
// let myString: string = "hello";
// let myBoolean: boolean = true;
// let myNull: null = null;
// let myUndefined: undefined = undefined; 

// function greet(name: string, age: number): string {
//   return `Hello my name is ${name} and I am ${age} years old`
// }

// greet("bob", 40);

// // complex types: arrays and objects

// // arrays 
// // ["hello"], [234], ["hello", 33]

// let myStrArray: string[] = ["a", "b", "c"];
// let myNumArray: Array<number> = [1,2,3];
// let myMixedArray: (string | number)[] = ["a", 23];
// let myMixedArray2: Array<string | number | boolean> = ["a", 3, false];

// const str: string = myStrArray[3];

// if (typeof str === "string") {
//   console.log("str");
// } else {
//   console.log("not a string");
// }

// // Tuples: an array with fixed length and content types. 

// let myTuple: [number, boolean] = [1, false];

// let num: number = myTuple[0];

// myTuple.push(9);
// console.log(myTuple)

// // objects: {key: values}

// // object type annotations

// let myObj: {name: string, id: number} = {name: "bob", id: 34459};


// // explicit typing through type annotations. 
// // type inferrence: TypeScript's way to identify types by itself. 

// let strVariable = "hello";
// let numVariable = [90, "s"];

// function add(a: number, b:number) {
//   return a + b;
// }

// let result = add(2,2);

// // literal types

// let trueVariable: true = true;
// let fiveVariable: 5 = 5;
// let mycolors: "red" | "blue" = "red";

// // type aliases: allows us create custom types based on existing types (primitives, objects, arrays or other custom types);

// // type Colors = "red" | "blue" | "green";
// // type Person = {name: string, age: number};
// // type myFunc = (value: string) => string;

// // let myRed: Colors = "red"

// // function printColor(color: Colors) {
// //   return color;
// // }

// let myColor = printColor("red");

// const fun: myFunc = (value: string) => {
//   return value
// } 

// let hello = fun("hello")

// // union types: we can create complex types by mixing exiting types using the | operator.

// type Dog = {name: string, age: number};
// type Cat = {name: string, age: number, color: string};

// type Pet = Dog | Cat;


// function petGreeting(pet: Pet): void {
//   if ("color" in pet) {
//     console.log(`Hi I am ${pet.name} the cat and my age is ${pet.age} and I am a ${pet.color} cat`);
//   } else {
//     console.log(`hello I am ${pet.name} the dog and I am ${pet.age} years old`);
//   }
// }

// const theCat: Cat = {name: "houdini", age: 33, color: "black"};
// const theDog: Dog = {name:"cocoman", age:3};

// petGreeting(theDog);



type Status = "on" | "off";
type Binary = 0 | 1;

type ValidStates = Status | Binary;

function showState(state: ValidStates): void {
    if (state === "on" || state === 1) {
        console.log("true");
    } else {
        console.log("false");
    }
}

showState("off")

type Dog = {name: string; age: number};
type Cat = {name: string; age: number; color: string};

type Pet = Dog | Cat;

function describePet(pet: Pet): void {
  if ("color" in pet) {
    console.log(pet.name, pet.age, pet.color);
  } else {
    console.log(pet.name, pet.age);
  }
}

function returnLength(value: string | string[]): number | string {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return "not an array";
  }
}

let myReturnVal = returnLength(["a", "b"]);
console.log(myReturnVal);
