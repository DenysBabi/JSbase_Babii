// 3. Создать два произвольных массива: 
// один массив - любимая спортивная команда / модели автомобилей / города, 
// во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
// Из двух массивов сделайте ассоциативный массив (объект).
// Массив, который будет выступать в качестве ключа - должен содержать уникальные значения

// Например:
// let keys = ["id", "name"];
// let values = [1, "Vlad"];

// В результате должно получится следующее:
// {
//     "id": 1,
//     "name": "Vlad"
// }

var CarKey = ["Bmw", "Audi", "VW", "Ford", "Toyota"];
var CarValue = ["Купе", "Седан", "Кросовер", "Хэтчбек", "Универсал"];

var Obj = {};

for (var i = 0; CarKey.length > i; i++) {
    console.log(Obj[CarKey[i]] = CarValue[i]);
}

console.log(Obj);

