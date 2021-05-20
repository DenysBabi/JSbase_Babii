var a = +prompt("Введите число №1: ");
var b = +prompt("Введите число №2: ");
var result = 0;

do {
    
    result = result + a;

    if (a % 2) {
        document.write("Нечетные: " + a + "<br>");
    };

    a++;
} 
while (a <= b);
document.write("Cума всех чисел в числовом промежутке: " + result + "<br>");
