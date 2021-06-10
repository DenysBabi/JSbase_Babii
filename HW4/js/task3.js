// 3.	Допишите функцию, которая определит, парное ли число (решение должно быть в одну строку).
// Функция должна вернуть "Even" или "Odd";

function isEven(num) {
 (num%2) ? console.log("Odd") : console.log("Even");
}

isEven(+prompt("Введите число"));