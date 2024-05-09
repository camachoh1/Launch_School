let prot = {};

let foo = Object.create(prot)

Object.getPrototypeOf(foo) === prot;
console.log(prot.isPrototypeOf(foo));

