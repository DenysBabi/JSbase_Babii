// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.

var Point = {
    x: "", 
    y: "", 
    GetQuadrant: function () {
        if (this.x > 0 && this.y > 0) {
            console.log("x: " + this.x + ", y: " + this.y + " = 1-й квадрант");
        } else if (this.x < 0 && this.y > 0) {
            console.log("x: " + this.x + ", y: " + this.y + " = 2-й квадрант");
        } else if (this.x < 0 && this.y < 0) {
            console.log("x: " + this.x + ", y: " + this.y + " = 3-й квадрант");
        } else if (this.x > 0 && this.y < 0) {
            console.log("x: " + this.x + ", y: " + this.y + " = 4-й квадрант");
        } 
    }
};

Point.x =  prompt("Ведите x");
Point.y =  prompt("Ведите y");
Point.GetQuadrant();

