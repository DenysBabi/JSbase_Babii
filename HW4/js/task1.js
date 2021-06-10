// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.

function calculate(a, b, sign) {
if (Number.isNaN(a)) {
    console.log("1-е значение не являеться числом!")
} else if (Number.isNaN(b)) {
    console.log("2-е значения не являеться числом!")
} else {
switch (sign) {
    case "+": result = a + b;
    break;
    case "-": result = a - b;
    break;
    case "*": result = a * b;
    break;
    case "/": result = a / b;
    break;
    default:
        console.log(sign + " не являеться арифметическим знаком!");
        break;
        }

    }
   return console.log(result);
// console.log(Number.isNaN(a), Number.isNaN(b), sign);
}


calculate(+prompt("Введите число 1"), +prompt("Введите число 2"), prompt("Введите знак арифметической операции"));