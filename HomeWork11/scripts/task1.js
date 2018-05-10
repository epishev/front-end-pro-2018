// 1) Создать 4-х уровневый калькулятор
// * 1ый уровень самый главный.
//     Будет иметь метод render(x), который отобразит текущее значение переменной х.
//     Будет иметь метод clear(x), очищает значение переменной на 0.
// <br />
// * 2ой уровень наследует 1ый
// <br />
// Будет иметь методы на основные математические операции, но в квадрате.
//     Методы Sum, Div, Mul,  которые получают 2 числа и выполняют операцию, и возвращают результат в квадрате, а также запишет значение в x (1 уровень), для этого создать метод setValue().
//     Например Sum(2, 5) -> (2+5)^2=49
//     <br />
//     * 3ий уровень наследует 2ой
// <br />
// Будет свойство-массив arr, в котором генерируются случайные числа от 0 до 50. Длина массива arr.length = 200;
// Тут будет метод reInit(arr), который переопределяет массив arr
// <br />
// * 4ий уровень наследует 3ий
// <br />
// Пустой
// <br />
// * Экземпляры создаются от 4 уровня
//


function FirstLevel() {
    this.x = 0;
}

FirstLevel.prototype.render = function () {
    console.log(this.x)
}
FirstLevel.prototype.clear = function () {
    this.x = 0;
}


function Secondlevel() {
  FirstLevel.apply(this, arguments);
  this.value = 0;
}

Secondlevel.prototype = Object.create(FirstLevel.prototype);
Secondlevel.prototype.constructor = Secondlevel;

Secondlevel.prototype.sum = function (a, b) {
    this.value = Math.pow((a + b), 2);
    return this.value;
}
Secondlevel.prototype.div = function (a, b) {
    if (b == 0) {
        this.value = console.error('На ноль делить нельзя!!');
    }
   return Math.pow((a / b), 2);
}
Secondlevel.prototype.mul = function (a, b) {
    this.value = Math.pow((a * b), 2);
}
Secondlevel.prototype.setValue = function () {
    this.x = this.value;
}

function ThirdLevel() {
    Secondlevel.apply(this, arguments);
    this.arr = new Array(200);
    this.reInit(this.arr);
}

ThirdLevel.prototype = Object.create(Secondlevel.prototype);
ThirdLevel.prototype.constructor = ThirdLevel;

ThirdLevel.prototype.reInit = function (arr) {
    arr = this.arr;
    for(var i = 0; i < arr.length; i++){
        arr[i] = Math.floor(Math.random()*50);
    }
    this.arr = arr;
}

function FourthLevel() {
    ThirdLevel.apply(this, arguments);
}

FourthLevel.prototype = Object.create(ThirdLevel.prototype);
FourthLevel.prototype.constructor = FourthLevel;



var obj = new FourthLevel();


