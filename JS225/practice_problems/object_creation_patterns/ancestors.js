// recursive solution

Object.prototype.ancestors = function() {
  const ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
}

// non recursive solution

Object.prototype.ancestors = function() {
  let answer = [];
  let proto = this;

  while (Object.getPrototypeOf(proto)) {
    proto = Object.getPrototypeOf(proto);

    if (proto !== Object.prototype) {
      answer.push(proto.name);
    } else {
      answer.push('Object.prototype');
    }
  }

  return answer;
}
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

