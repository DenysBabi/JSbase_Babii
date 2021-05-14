// x1,2
var x = prompt("Задайте точку x:");
console.log("x = " + x1);
var x1 = prompt("Задайте точку x1:");
console.log("x1 = " + x1);
var x2 = prompt("Задайте точку y2:");
console.log("x2 = " + x2);
// y1,2
var y1 = prompt("Задайте точку y1:");
console.log("y1 = " + y1);
var y2 = prompt("Задайте точку y2:");
console.log("y2 = " + y2);
// formula
var k = (y1 - y2) / (x1 - x2);
console.log("k = " + k);
var b = y2 - k*x2;
console.log("b = " + b);
var y = k*x + b;
console.log("y = " + y);
document.write("Результат: " + y + '<br/>');