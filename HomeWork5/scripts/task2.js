// 2) В двумерном массиве A размером n на m. Заполнить случайными числами.
// 1. Найти ряд, где сумма элементов наименьшая
// 2. Найти ряд, где сумма элементов найбольшая
// 3. Поменять ряды местами (1 и 2 пункт)

var n = 10;
var m = 10;
A = new Array(n);

for(i = 0; i < A.length; i++){
    A[i] = new Array(m);
}

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        A[i][j] = Math.floor(Math.random()*41 - 21);
    }
}
console.log(A);

var minSum = 0;
var minSumBuffer = 0;
var minSumPos = 0;
var maxSum = 0;
var maxSumBuffer = 0;
var maxSumPos = 0;

for (i = 0; i < 1; i++) {
    for (j = 0; j < A[i].length; j++) {
        minSum += A[i][j];
    }
}

for (i = 0; i < 1; i++) {
    for (j = 0; j < A[i].length; j++) {
        maxSum += A[i][j];
    }
}

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        minSumBuffer += A[i][j];
    }
    if( minSumBuffer < minSum ) {
        minSum = minSumBuffer;
        minSumPos = i;
    }

    minSumBuffer = 0;
}
console.log('Минимальная сумма ряда ' + minSumPos + ' равняется :' + minSum);

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        maxSumBuffer += A[i][j];
    }
    if( maxSumBuffer > maxSum ) {
        maxSum = maxSumBuffer;
        maxSumPos = i;
    }

    maxSumBuffer = 0;
}
console.log('Максимальная сумма ряда ' + maxSumPos + ' равняется :' + maxSum);

var ArrBuffer = A[minSumPos].concat();
A[minSumPos] = A[maxSumPos];
A[maxSumPos] = ArrBuffer;

console.log(A);
