// 2) Элементы массива между min -- max записать в массив B. Массив взять из 1го задания
n = 10;
var A = [];
var B = [];
A.length = n;

for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * 50) - 10;
}
console.log(A);

var min = A[0];
var posMin = 0;
var max = A[0];
var posMax = 0;

for (var i = 0; i <= A.length; i++) {
    if (A[i] < min) {
        min = A[i];
        posMin = i;
    }
}
console.log('Минимальное число Массива A = ' + min + ' с индексом: ' + posMin);

for (var i = 0; i <= A.length; i++) {
    if (A[i] > max) {
        max = A[i];
        posMax = i;
    }
}
console.log('Максимальное число Массива A = ' + max + ' с индексом: ' + posMax);

if ( posMin < posMax ) {
    for (var i = posMin; i <= posMax; i++) {
        B[B.length] = A[i];
    }
} else {
    for (var i = posMin; i >= posMax; i--) {
        B[B.length] = A[i];
    }
}
console.log('Элементы массива A между min -- max в массиве B = ' + B);

// 3) В массиве A поменять местами min и max. Массив взять из 2го задания

var c = A[posMin];
A[posMin] = A[posMax];
A[posMax] = c;

console.log('Массив А с поменянными местами min и max = ' + A);




