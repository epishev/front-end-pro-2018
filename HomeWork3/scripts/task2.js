// 2. a и b вводятся с клавиатуры (числа). Каждое число от a до b вывести в квадрате с сохранением знака.
//
// -3, -2, -1, 0, 1, 2
// ->
// -9, -4, -1, 0, 1, 4

var a  = +prompt("Введите a:", 0);
var b  = +prompt("Введите b:", 0);
var res = 0;

for (var i = a; i <= b; i++) {
    res = i * i;
    res *= i < 0 ? -1 : 1;

    if (i < 0) {
        res = -res;
    }
    console.log(res);
}