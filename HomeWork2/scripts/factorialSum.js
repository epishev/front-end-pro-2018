var a = +prompt('Введите значение A:', 0);
while(isNaN(a)) {
    a = +prompt('Вы ввели неправильное значение, повторите попытку:', 0);
}
var b = +prompt('Введите значение B:', 0);
while(isNaN(a) && a < b) {
    b = +prompt('Вы ввели неправильное значение или b < a, повторите попытку:', 0);
}
var h = +prompt('Введите Шаг H:', 0);
while(isNaN(h)) {
    h = +prompt('Вы ввели неправильное значение, повторите попытку:', 0);
}
for (var i = a, sum = 0; i <=  b; i += h) {
    for (var j = 1, factorial = 1; j <= i; j++){
        factorial = factorial * j;
    }
    console.log('Факториал первого числа ' + i + '! = ' + factorial);
    sum = sum + factorial;
}
console.log('Сумма факториалов = ' + sum);