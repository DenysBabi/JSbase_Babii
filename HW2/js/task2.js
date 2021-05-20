var input;
var i = 0;
input = prompt("Введите цифру 4-ри: ");

do {
    i++;
    if (i == 1) {
        document.write("*<br>");
    } else
    if (i == 2) {
        document.write("**<br>");
    } else
    if (i == 3) {
        document.write("***<br>");
    } else
    if (i == 4) {
        document.write("****<br>");
    } 
} 
while (input > i);