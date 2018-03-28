// 1) Создать массив А размерностью n. Заполнить случайными числами любом диапазоне.
//     Например A = [23,1,2,52,5,34,23,6,246,436];
// 1. проверить все числа на простоту, и найденные простые числа сохранить в массив B.
// 2. найти максимальное число и минимальное число.
n = 10;
var A = [];
var B = [];
A.length = n;

for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * 50) - 10;
}

for (var i = 0; i < A.length; i++) {
    var isPrime = true;
    var k = (A[i] < 0 ) ? -1 * A[i] : A[i];
    if ( k == 2 ){
        k += 1;
    }
    if ( A[i] == 0) {
        continue;
    }

    for (var d = 2; d < k; d++) {
        if (A[i] % d == 0) {
            isPrime = false;
            break;
        }
    }

    if ( isPrime == true ) {
        B[B.length] = A[i];
    }
}
console.log(A);
console.log('Массив простых чисел B: ' + B);

var min = A[0];
var max = A[0];

for (var i = 0; i <= A.length; i++) {
    if (A[i] < min) {
        min = A[i];
    }
}
console.log('Минимальное число Массива A = ' + min);

for (var i = 0; i <= A.length; i++) {
    if (A[i] > max) {
        max = A[i];
    }
}

console.log('Максимальное число Массива A = ' + max);
