let Money = require('./MyClass.js');
let f = 200;
let x = new Money(f);

f = x.plus(50).minus(25).value;

console.log(f);

