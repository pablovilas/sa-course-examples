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

//
// Number
//

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

//
// String
//

'hellp'.length; // 5
'hello'.charAt(0); // "h"
'hello, world'.replace('world', 'ort'); // "hello, ort"
'hello'.toUpperCase(); // "HELLO"
var interpolation = ', world';
`hello${interpolation}`;

//
// Other types
//

var object = {};
object.attribute // undefined
object.attribute = null;
object.attribute // null

//
// Boolean
//

true;
false;

0 == false; // true
"" == false; // true
NaN == false; // false
null == false; // false
undefined == false; // false
1 == true; // true
10 == true; // false
"hello" == true; // false
0 === false // false, strict equal, no type conversion
1 === true; // false, stric equal, no type conversion

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

//
// Variables
//

