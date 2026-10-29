/*var marks = 100;
console.log('Hello');
console.log(marks);
*/


var firstName = "Alan";       // string
var age = 28;                    // number (integers)  
var price = 99.5;                // number (decimals)
var big = 123456789012345678n;   // bigint 
var isTester = true;             // boolean
var notAssigned;                 // undefined (declared, no value)
var empty = null;                // null

console.log(firstName);
console.log(age);
console.log(price);
console.log(big);
console.log(notAssigned);
console.log(empty);

console.log(typeof firstName);   // string
console.log(typeof age);         // number
console.log(typeof big);         // bigint
console.log(typeof isTester);    // boolean
console.log(typeof notAssigned); // undefined
console.log(typeof empty);       // object 

var bigNumberOne = 567n;
var bigNumberTwo = 433n;
var bigNumberSum = bigNumberOne + bigNumberTwo;

// Why does typeof null return "object"? - This is a historical bug from the very first version of JavaScript