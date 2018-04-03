// 2) написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.

function sumComparison(Arr1, Arr2) {
    var sum1 = 0;
    var sum2 = 0;

    for (var i = 0; i < Arr1.length; i++) {
        if (typeof Arr1[i] == 'number') {
            sum1 += Arr1[i];
        }
    }
    for (var i = 0; i < Arr2.length; i++) {
        if (typeof Arr2[i] == 'number') {
            sum2 += Arr2[i];
        }
    }
    return (sum1 > sum2) ? Arr1 : Arr2;
}

