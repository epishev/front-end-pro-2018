// 2) Создать класс SuperMath. Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak.
// Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
// Если -да, сделать мат действие znak(которое описано в прототипе), иначе - запросить ввод новых данных через метод input() класса SuperMath.
//     Пример обекта: `obj = { X:12, Y:3, znak: “/”}`, возможные варианты znak=>  `+ - / * %`.
//     При вводе znak нужно сделать проверку корректности ввода на возможные математические действия


function SuperMath() {
    this.obj = {};

}
SuperMath.prototype.sum = function (a, b) {
    alert(a + b);
}
SuperMath.prototype.sub = function (a, b) {
    alert(a - b);
}

SuperMath.prototype.div = function (a, b) {
    if (b == 0) {
        console.error('Делить на ноль нельзя!');
    }
    alert(a / b);
}

SuperMath.prototype.mul = function (a, b) {
    alert(a * b);
}

SuperMath.prototype.mod = function (a, b) {
    alert(a % b);
}



SuperMath.prototype.input = function () {
   this.obj.X = +prompt('Введите число X: ',0);
   this.obj.Y = +prompt('Введите число Y: ',0);
   this.obj.znak = prompt('Введите znak(возможные варианты znak=>  `+ - / * %`): ', "/");
}
SuperMath.prototype.check = function (obj, flag) {
    var flag = (flag == undefined) ? confirm('Хотите произвести действие "' + obj.znak + '" c X:' + obj.X + ' и Y' + obj.Y) : flag;

    if (flag) {
        switch(obj.znak) {
            case '+':
                this.sum(obj.X, obj.Y);
                break;
            case '-':
                this.sub(obj.X, obj.Y);
                break;
            case '/':
                this.div(obj.X, obj.Y);
                break;
            case '*':
                this.mul(obj.X, obj.Y);
                break;
            case '%':
                this.mod(obj.X, obj.Y);
                break;
        }
    } else {
        this.input();
        this.check(this.obj, true);
    }
}