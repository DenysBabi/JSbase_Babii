// 1. Сделать собственные примеры методов применяемых для массивов.

var Arr = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
var secondArr = ["V8", "V6", "Amg", "New", "Old", "SEL", "SE"];

console.log(Arr);
console.log(secondArr);


console.log("join: ");
var joinArr = Arr.join(" ");
console.log(joinArr);

console.log("split: ");
var splitArr = joinArr.split(" ");
console.log(splitArr);

console.log("concat: ");
var concatArr = Arr.concat(secondArr);
console.log(concatArr);


console.log("reverse: ");
concatArr = concatArr.reverse();
console.log(concatArr);

console.log("unshift: ");
var unshifArr = concatArr.unshift("Niva", "YAZ", "X5");
console.log(concatArr);
console.log("Длина массива стала: " + unshifArr);


console.log("pop: ");
var delArr = concatArr.pop();
console.log("Массив после удаления: " + concatArr);
console.log("Размер массива: " + concatArr.length);
console.log("Удаленный элемент: " + delArr);