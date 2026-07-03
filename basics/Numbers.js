const number1 = 20000;
const number2 = new Number(200);
console.log(number2);
console.log(number1);

console.log(`value 1 is ${number1} and value 2 is ${number2}`);

console.log(number1.toString().length);
console.log(number1.toFixed(2));
console.log(number1.toPrecision(2));
console.log(typeof (number1.toFixed(2)));
console.log(typeof (number1.toPrecision(2)));
console.log(number1.toLocaleString("en-IN"));

console.log(number1.length);// not a mumber menthod
