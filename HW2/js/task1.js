var a = +prompt("Введите число №1: ");
var b = +prompt("Введите число №2: ");
var c = +prompt("Введите число №3: ");

while (a == b && a == c && b == a && b == c && c == a && c == b) {
    alert("Ошибка");
    break;
}

var result = (a + b + c)/3;
document.write("Среднее арифметическое число: " + result + "<br>");