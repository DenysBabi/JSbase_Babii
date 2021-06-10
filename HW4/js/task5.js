// 5.  Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:  
		
// 		var computerChoice = Math.random();
// 		alert(computerChoice);
		
//         Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// 		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// 		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// 		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново

var myChoice = prompt("Введите Камень, Ножницы или Бумага.");
var computerChoice = Math.random();

while (myChoice != null) {
    console.log(computerChoice);
if (computerChoice < 1/3) { // пк камень, 
    computerChoice = "Камень";
    switch (myChoice) {
        case computerChoice: console.log("Ничья!");
        break;
        case "Ножницы":  console.log(computerChoice + " бъет " + myChoice + ". Вы проиграли!");
        break;
        case "Бумага": console.log(myChoice + " бъет " + computerChoice + ". Вы победили!");
        break;
        default: console.log("Ошибка ввода данных!");
        break;
    }
} else if (computerChoice < (1/3)*2) {
    computerChoice = "Ножницы";
    switch (myChoice) {
        case computerChoice: console.log("Ничья!");
        break;
        case "Бумага": console.log(computerChoice + " бъет " + myChoice + ". Вы проиграли!");
        break;
        case "Камень": console.log(myChoice + " бъет " + computerChoice + ". Вы победили!");
        break;
        default: console.log("Ошибка ввода данных!");
        break;
    }
} else {
    computerChoice = "Бумага";
    switch (myChoice) {
        case computerChoice: console.log("Ничья!");
        break;
        case "Камень": console.log(computerChoice + " бъет " + myChoice + ". Вы проиграли!");
        break;
        case "Ножницы": console.log(myChoice + " бъет " + computerChoice + ". Вы победили!");
        break;
        default: console.log("Ошибка ввода данных!");
        break;
    }
}

if (confirm("Желаете повторить?")){
    myChoice = prompt("Введите Камень, Ножницы или Бумага.");
    computerChoice = Math.random();
    } else break;
}
