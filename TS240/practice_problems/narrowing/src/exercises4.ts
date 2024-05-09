// exercise 1: type narrowing

// function printLength(val: string | string[]): void {
//   if (typeof val === "string") {
//     console.log(`String length: ${val.length}`);
//   } else {
//     console.log(`Array count: ${val.length}`);
//   }
// }

// printLength('hello');
// printLength(["habla", "cole"]);

// exercise 2: Type Predicates

// Type predicates are a TypeScript feature that allow a function to act as a runtime type guard. By returning arr is string[], isStringArray tells TypeScript that if the function returns true, then arr is an array of strings. This is particularly useful for narrowing types after function calls.

// function isStringArray(arr: unknown[]): arr is string[] {
//   return arr.every(el => typeof el === "string");
// };

// console.log(isStringArray([1, 2, 3]));
// console.log(isStringArray(["test", "string"]))


// exercise 3: short-circuiting

// function logInput(val: string | undefined): void {
//   (val && val.length > 0) && console.log("input is defined and not empty");
// }

// logInput('hello');
// logInput('');

// exercise 4: discriminated unions

// type Circle = {
//   kind: "circle";
//   radius: number;
// }

// type Square = {
//   kind: "square";
//   sideLength: number;
// }

// type Shape = Circle | Square;

// function getArea(shape: Shape): number {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius**2
//   } else {
//     return shape.sideLength**2
//   }
// }

// console.log(getArea({ kind: "circle", radius: 10 }));
// console.log(getArea({ kind: "square", sideLength: 10 }));

// exercise 5: exhaustiveness

// Exhaustiveness checking ensures that all possible cases of a union type are accounted for in something like a switch statement. In the updated getArea function, we now use a switch statement to cover all variants of Shape. If we miss a case (say, we add a new Triangle type to Shape and forget to handle it in getArea), TypeScript will detect this and assertNever will cause an error, alerting us to the unhandled case.


// type Circle = {
//   kind: "circle";
//   radius: number;
// };

// type Square = {
//   kind: "square";
//   sideLength: number;
// };

// type Shape = Circle | Square;

// function assertNever(val: never): never {
//   throw new Error(`Error: ${JSON.stringify(val)}`);
// }

// function getArea(shape: Shape): number {
//   switch(shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius**2;
//     case "square":
//       return shape.sideLength**2;
//     default:
//       return assertNever(shape);
//   }
// }

// exercise 6: unknown+

// The unknown type represents any value but is safer than any because it doesn't allow arbitrary operations on values without type checking. In logUnknown, we use typeof to narrow down the type within the function body, ensuring operations are applied safely.

function logUnknown(val: unknown): void {
  if (typeof val === "string") {
    console.log(val);
  }
}

logUnknown(1);
logUnknown("hablalooo");