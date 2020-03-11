/*

## Javascript main types ##

* Number
* String
* Boolean
* Symbol (new in ES2015)
* Object
  - Function
  - Array
  - Date
  - RegExp
  - Error
* null
* undefined

*/

//////////////////////
// Number
//////////////////////

// Javascript numbers are double-precision 64-bit format IEEE 754 values

101;
0.25;
.25;

// Be careful with precision

0.1 + 0.2 // 0.30000000000000004;
0.1 + 0.7 // 0.7999999999999999;

// Math object

Math.random(); // random value between 0 and 1
Math.sqrt(4); // 2
const radius = 5;
const circumference = 2 * Math.PI * radius;

// Parsing numbers

parseInt('10'); // 10
parseFloat('0.25'); // 0.25
+ '10'; // 10 using '+' unary operator
+ '0.25'; // 0.25 using '+' unary operator

// NaN (Not a number) special type

parseInt('hello'); // NaN

//////////////////////
// String
//////////////////////

'hellp'.length; // 5
'hello'.charAt(0); // "h"
'hello, world'.replace('world', 'ort'); // "hello, ort"
'hello'.toUpperCase(); // "HELLO"
var interpolation = ', world';
`hello${interpolation}`;

//////////////////////
// Other types
//////////////////////

var object = {};
object.attribute // undefined
object.attribute = null;
object.attribute // null

//////////////////////
// Boolean
//////////////////////

true;
false;

0 == false; // true
"" == false; // true
NaN == false; // false
null == false; // false
undefined == false; // false
1 == true; // true
10 == true; // false
10 == '10'; // true
"hello" == true; // false
0 === false // false, strict equal, no type conversion
1 === true; // false, stric equal, no type conversion
10 === '10'; // false, stric equal, no type conversion

// There are also "!=" and "!==" operators

/*
Javascript truth
- false, 0, empty strings (""), NaN, null, and undefined all become false.
- All other values become true.
*/
const values = [0, "", NaN, null, undefined];
values.forEach((value) => {
    if (!value) { // Be careful, take a look at the differences wit the previous example
        console.log(`${value} is false`);
    }
});

// Explicit Boolean conversion

Boolean(''); // false
Boolean(NaN); // false
Boolean(10); // true

//////////////////////
// Variables
//////////////////////

// Block level variables, let 

let foo = 0;
if (true) {
    let foo = 1;
    console.log(foo); // 1
}
console.log(foo); // 0

// Constant variables, const

const PI = 3.14;
PI = 3.14158; // throws a TypeError: Assignment to constant variable

// "Normal" variables, var

var baz = 0; // number
baz = 10; // number
baz = { attribute: 0 }; // object
baz = [1, 2, 3, 4]; // array

var bar = 0;
if (true) {
    var bar = 1;
    console.log(bar); // 1
}
console.log(bar); // 1

//////////////////////
// Operators
//////////////////////

x = 0;
x += 5; // 5
y = 0;
y = y + 5; // 5

x++ // 5
x // 6
++x // 7

y-- // 5
y // 4
--y // 3

'hello' + 'ort'; // "hello ort"
'1' + 2 + 3; // "123" // additions converts from left to right
1 + 2 + '3'; // "33"
1 - 2 - '3'; // "-4" // divisions, multiplications and substractions always convert strings into numbers 
"1" - 2 - 3; // "-4"

//////////////////////
// Control structures
//////////////////////

// if, else if, else

var animal = 'dog';
var sound = '';
if (animal == 'cat') {
    sound = 'meow';
} else if (animal == 'dog') {
    sound = 'woof';
} else {
    sound = 'no sound';
}
sound == 'woof';

// while, do while

while (true) {
    // an infinite loop!
}
  
var input;
do {
  input = Math.random();
} while (input < 0.5);

// for

for (var i = 0; i < 5; i++) {
    console.log(`iteration with "for" n˚: ${i}`);
}

// for..of

var numbers = [0, 1, 2 ,3, 4];
for (let item of numbers) {
    console.log(`iteration whit "for..of" n˚: ${item}`);
}

// for..in

var person = { name: 'John', lastName: 'Doe' };
for (let attribute in person) {
    console.log(`iteration whit "for..in" n˚: ${person[attribute]}`);
}

// short circuit
var obj = { name: 'John' };
var name = obj && obj.name;

// cached example

var cachedName = null;
var name = cachedName || (cachedName = obj.name); 

// ternary operator

var age = 25;
var allowed = (age > 18) ? 'yes' : 'no';
console.log(allowed);

// switch

const action = 'update';
switch (action) {
    case 'create':
        console.log('Create invoked');
        break;
    case 'update':
        console.log('Update invoked');
        break;
    case 'delete':
        console.log('Delete invoked');
        break;
    default:
        console.log('Default action invoked');
}

//////////////////////
// Objects
//////////////////////

/**

JavaScript objects can be thought of as simple collections of name-value pairs. As such, they are similar to:

* Dictionaries in Python.
* Hash tables in C and C++.
* HashMaps in Java.

 */

var obj = new Object();
var obj = {};
var obj = {
    id: 23,
    date: '2019-03-20',
    name: 'John',
    lastName: 'Doe',
    address: { // nested object
        street: 'Brasil Av. 4561',
        city: 'Montevideo'
    },
    courses: ['P1', 'P2', 'DA1', 'DA2', 'AS'] // array
};

`${obj.address.street}, ${obj.address.city}`
`${obj['address']['street']}, ${obj['address']['city']}`

// object class 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString () {
        return `{ name: "${this.name}", age: ${this.age} }`;
    }
    sayHi() {
        return `Hi!, I'm ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, number) {
        super(name, age);
        this.number = number;
    }
}

var student = new Student("John", 25, 190432);
// Destructuring

const obj = { nombre: "Carlos", apellido: "Gonzalez" };
const { nombre } = obj;
console.log(nombre); // "Carlos"

// Spread operators
// Los spread operators o operadores  de propagación permiten  una propagación o expansión individual dentro de un receptor.

const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };
const newObj = { ...obj1, ...obj2, planet: 'Earth' };
console.log(newObj)
// { firstName: 'Foo', age: 22, lastName: 'Bar', gender: 'M', planet: 'Earth' }


// ES5
Math.max(5, 6, 8, 9, 11, 999);
// 999

// ES6
const numbers = [5, 6, 8, 9, 11, 999];
Math.max(...numbers)

//////////////////////
// Arrays
//////////////////////

var a = new Array();
a[0] = 'dog';
a[1] = 'cat';
a[2] = 'hen';
a.length; // 3

var a = ['dog', 'cat', 'hen'];
a.length; // 3

a[100] = 'fox';
a.length; // 101

typeof a[90]; // undefined

a.push('cow');

// Destructuring

const [a, b] = ["hola", "mundo"];
console.log(a); // "hola"
console.log(b); // "mundo"


// Spread operators

const codeburst = 'CODEBURST';
const characters = [ ...codeburst ];
console.log(characters)
// [ 'C', 'O', 'D', 'E', 'B', 'U', 'R', 'S', 'T' ]

const items = ['This', 'is', 'a', 'sentence'];
console.log(items) // [ 'This', 'is', 'a', 'sentence' ]
console.log(...items) // This is a sentence

// array functions (ES6)

// forEach
let letras = ['a', 'b', 'c'];

letras.forEach(function(element) {
 console.log(element);
});

// a
// b
// c

//find

const inventory = [
   {name: 'apples', quantity: 2},
   {name: 'bananas', quantity: 0},
   {name: 'cherries', quantity: 5}
];
console.log(inventory.find(fruit => fruit.name === 'cherries'));
// { name: 'cherries', quantity: 5 }

// map 

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
  return x * 2;
});

console.log(doubles);
// [2, 10, 20, 30]
console.log(numbers);
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);

console.log(roots);
// [1, 2, 3]
console.log(numbers);
// [1, 4, 9]

// filter 

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// ["exuberant", "destruction", "present"]


//////////////////////
// Functions
//////////////////////

// object prototype

// functions are objects

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function () {
        return `{ name: "${this.name}", age: ${this.age} }`;
    }
}

var you = new Person('John', 25);
you.toString();

// arrow functions (ES6)
//Proporcionan una sintaxis más compacta para la definición de funciones. Además conserva el valor de this

var sum = (a, b) => a + b;
sum(1,2) // 3

// default parameters (ES6)

function f (x, y = 7, z = 42) {
   return x + y + z
}
f(1) // 50
f(1, 1) // 44
f(1, 1, 1) // 3

// rest parameters (ES6)

function findMax(...numbers) {
   let max = Number.MIN_SAFE_INTEGER;
   numbers.forEach(n => {
       if (n > max) {
           max = n;
       }
   })
   return max;
}

console.log('max value ' + findMax(1, 123, 500, 115, 44, 88));
// "500"

// extending object

Person.prototype.sayHi = function () {
    return `Hi!, I'm ${this.name}!`;
};

you.sayHi();

// regular functions

function multiply(a, b) {
    var result = a * b;
    return result;
}

multiply(2,4); // 8
multiply(); // NaN, you can ommit parameters

function sayHi(name) {
    if (name) {
        console.log(`Hi!, I'm ${name}!`);
    } else {
        console.log(`Hi!, I'm a stranger!`);
    }
}

sayHi('John');
sayHi();

var approved = function (score) {
    return score >= 86;
}
approved(90);

// nested functions

function calculate(score, assistance) {
    var factor = function (n) {
        return n > 40;
    }
    if (score >= 86) {
        return factor(assistance);
    }
    return score > 70 && factor(assistance);
}

// closures

function prefixAndSuffix(prefix) {
    return function(suffix) {
        return `${prefix} ${suffix}`;
    };
}
var addSuffix = prefixAndSuffix('Hi!, I\'m ');
addSuffix('John');
