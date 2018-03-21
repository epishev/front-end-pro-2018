var n = +prompt('Введите кол-во чисел в последовательности:', 0);
while(isNaN(n)) {
    n = +prompt('Вы ввели неправильное значение, повторите попытку:', 0);
}
var head = 'Ряд Фибоначи с последовательностью ' + n + ': 0, 1, 1,';
var res = ' ';
for (var i = 3, a = 1, b = 1; i < n; i++) {
    var c = a + b;
    a = b;
    b = c;
    res = res + b + ', ';
}
var finalRes = head + res;
document.write('<h1>' + finalRes.slice(0, finalRes.length - 2) + '</h1>'); //Убираем с результата последнюю запятую!