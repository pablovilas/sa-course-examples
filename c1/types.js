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
10 == '10';
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
'1' + 2 + 3 // "123"
1 + 2 + '3' // "33"

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

