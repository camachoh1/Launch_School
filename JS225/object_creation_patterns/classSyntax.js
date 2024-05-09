// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// let rec = new Rectangle(10, 5);
// console.log(typeof Rectangle);         // function
// console.log(rec instanceof Rectangle); // true
// console.log(rec.constructor);          // [class Rectangle]
// console.log(rec.getArea());            // 50


// class Rectangle {
// 	constructor(length, width) {
// 		this.length = length;
// 		this.width = width;
// 	}

// 	getArea() {
// 		return this.length * this.width;
// 	}

// 	toString() {
// 		return `[Rectangle ${this.width * this.length}]`;
// 	}
// }

// class Square extends Rectangle {
// 	constructor(size) {
// 		// super(size, size);
// 	}

// 	toString() {
// 		return `[Square] ${this.width * this.length}`;
// 	}
// }  

// let cuadro = new Square(20);



// Object.defineProperties allow us to create an object with properties that cannot be modified if we chose to or not.
// function newPerson(name) {
//   return Object.defineProperties({ name: name }, {
//     log: {
//       value() {
//         console.log(this.name);
//       },
//       writable: false
//     },
//   });
// }

// let me = newPerson('coleto');
// me.log()
// console.log(Object.getOwnPropertyNames(me));

let coleto = {
  name: 'el brayan'
}

function coleto2() {
  name: 'el cuchilla'
}

console.log(coleto.constructor);
console.log(Object.prototype.constructor);
console.log(coleto2.prototype.constructor);