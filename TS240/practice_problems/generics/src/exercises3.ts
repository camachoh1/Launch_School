// exercise 1

// type Val = string | number;

// function wrapInArray(value: Val): Array<string | number> {
//   if (typeof value === "string") {
//     return [value];
//   } else {
//     return [value];
//   }
// }

// console.log(wrapInArray('hello'));
// console.log(wrapInArray(100));

// exercise 2

// function printId(val: number | string): void {
//   if (typeof val === "string") {
//     console.log('Your ID is a string');
//   } else {
//     console.log('Your ID is a number');
//   }
// }

// printId(101);
// printId("202");

// exercise 3

// function firstElement<T>(arr: T[] ): T {
//   return arr[0];
// }

// console.log(firstElement([1,2,3]));
// console.log(firstElement([]))

// exercise 4

// interface KeyValuePair<Key, Value> {
//   key: Key;
//   value: Value;
// }

// const myObject:KeyValuePair<string, number> = {
//   key: "hablalo",
//   value: 333,
// }

// console.log(myObject);

// exercise 5

function filterByType<T>(arr: any[], type: T): T[] {
  return arr.filter(el => typeof el === type);
}

console.log(filterByType<string>(["hello", "world", 42, true], "string"))