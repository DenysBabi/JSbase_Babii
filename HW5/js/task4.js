// 4. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
// содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

// 5. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
// Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//     • "director" — 3000;
//     • "manager" — 1500;
//     • "programmer" — 2000;
//     • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.


var i = 0; Obj = {}; arrObjects = [];

do {
    if (name = prompt("name")) {
        Obj["name"] = name;
    } else break;

    if (sName = prompt("sName")) {
        Obj["sName"] = sName;
    } else break;

    if (age = prompt("age")) {
        Obj["age"] = age;
    } else break;

    if (occupation = prompt("occupation")) {
        Obj["occupation"] = occupation;
    } else break;

    Obj["show"] = function (){console.log("name: " + this.name + ", sName: " + this.sName + ", age: " + this.age + ", occupation: " + this.occupation)};

    arrObjects[i] = (Obj);

    Obj.show(); // вызов метода

    if (addnew = confirm("Желаете добавить сотрудника?")) {
        Obj = {};
        i++;
    } else break;
} 
while (addnew == true);

function zp() {
for (i = 0; i < arrObjects.length; i++) {
    for (var key in arrObjects[i]) {
        if (arrObjects[i][key] == "director") {
            arrObjects[i]["salary"] = 3000;
            break;
        } else if (arrObjects[i][key] == "manager") {
            arrObjects[i]["salary"] = 1500;
            break;
        } else if (arrObjects[i][key] == "programmer") {
            arrObjects[i]["salary"] = 2000;
            break;
        } else arrObjects[i]["salary"] = 1000;
    }
}

for (var i = 0; i < arrObjects.length; i++) {
    for (var key in arrObjects[i]) {
        if (key != "show") console.log(key + ":" + arrObjects[i][key]); // выводим инфу
    }
}

}

if (confirm("Назначить зарплату и вывести инфу?")) zp();

console.log(arrObjects);

