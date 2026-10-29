/*var a = 4
if (a&2 == 0){
    console.log("a is an even number");
}
    */



var inputNumber = 10;

if (inputNumber === 0) {
  console.log("The number is Zero");
} else if (inputNumber > 0 && inputNumber % 2 === 0) {
  console.log("Positive Even Number");
} else if (inputNumber > 0 && inputNumber % 2 !== 0) {
  console.log("Positive Odd Number");
} else if (inputNumber < 0 && inputNumber % 2 === 0) {
  console.log("Negative Even Number");
} else {
  console.log("Negative Odd Number");
}