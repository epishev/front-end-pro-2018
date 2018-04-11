// 2) Написать функцию, которая получает 3 аргумента: два числа и функцию. Произвести вызов переданной функции с двумя аргументами числами.
//     `doFunction(2, 3, power);` в ответе должны получить 8, как 2 в степени 3.
// 3) Из п.2 реализовать функции sum, div, mul, power
//
//     `doFunction(16, -23, mul); // 16*(-23)`
// 4) Из п.2, если количество числовых аргументов равно единице и переданная функция `factorial` - реализовать расчет факторикала. `doFunction(6, factorial);`, в ответе поулчаем 6! = 720. // arguments.length и typeof


function power(a, b) {
    var res = 1;
    for (var i = 0; i < b; i++) {
        res = res * a;
    }
    return res;
}

function sum(a, b) {
    return a + b;
}

function div(a, b) {
    if ( b != 0) {
        return a / b;
    } else {
        console.error('На ноль делить нельзя!!');
    }
}

function mul(a, b){
    return a * b;
}

function factorial(a) {
 var fact = 1;
 for (var i = 1; i <= a; i++) {
     fact = fact * i;
    }
  return fact;
}

function doFunction() {
    var args = arguments;

   if ( typeof args[0] == 'function' && typeof args[1] == 'number' && typeof args[2] == 'number') {
       return args[0](args[1], args[2]);
   } else if ( typeof args[1] == 'function' && typeof args[0] == 'number' && typeof args[2] == 'number' ) {
       return args[1](args[0], args[2]);
   } else if ( typeof args[2] == 'function' && typeof args[0] == 'number' && typeof args[1] == 'number' ) {
       return args[2](args[0], args[1]);
   } else if ( args.length == 2 && typeof args[0] == 'number' && typeof args[1] == 'function' ) {
       return args[1](args[0]);
   } else if ( args.length == 2 && typeof args[1] == 'number' && typeof args[0] == 'function' ) {
       return args[0](args[1]);
   } else {
       console.error('Вы ввели неккоректное значение');
   }
}