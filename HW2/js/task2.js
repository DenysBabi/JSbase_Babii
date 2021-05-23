var input;
var i=0;
var result ="";
input = prompt("Введите цифру: ");

do {
    result +="*"; 
    document.write(result + "<br>");
    i++;
} 
while (input > i);