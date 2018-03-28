// 5) Определить количество элементов в заданном массиве, отличающихся от минимального на 5.

var n = 20;
var A = [];
A.length = n;
var sum = 0;
for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * 30 - 10);
}
console.log(A);
var min = A[0];
var posMin = 0;

for (var i = 0; i <= A.length; i++) {
    if (A[i] < min) {
        min = A[i];
        posMin = i;
    }
}
console.log('Минимальное число Массива A = ' + min + ' с индексом: ' + posMin);

var dif1 = min + 5;
var dif2 = min - 5;
for (var i = 0; i < A.length; i++) {
    if ( i === posMin) {
        continue;
    }
    if ( A[i] === dif1 || A[i] === dif2 ) {
        console.log('Число отличное от минимального на 5: ' + A[i] + ' с индексом: ' + i);
        sum += 1;
    }
}
console.log('Количество элементов в заданном массиве: ' + sum);

