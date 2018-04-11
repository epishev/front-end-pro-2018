// 2) Написать функцию, которая получает 3 аргумента: два числа и функцию. Произвести вызов переданной функции с двумя аргументами числами.
//     `doFunction(2, 3, power);` в ответе должны получить 8, как 2 в степени 3.
// 3) Из п.2 реализовать функции sum, div, mul, power
//
//     `doFunction(16, -23, mul); // 16*(-23)`

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



function doFunction(a, b , func) {
    var args = arguments;
   if ( typeof args[0] == 'function' && typeof args[1] == 'number' && typeof args[2] == 'number') {
       return args[0](args[1], args[2]);
   } else if ( typeof args[1] == 'function' ) {
       return args[1](args[0], args[2]);
   } else if ( typeof args[2] == 'function' ) {
       return args[1](args[0], args[2]);
   } else {
       console.error('Передайте третим аргументом функцию!');
   }
}