// 1) Написать функцию заполнения двумерного массива. Имя произвольное.

var n = 10;
var m = 10;
B = new Array(n);

for(i = 0; i < B.length; i++){
    B[i] = new Array(m);
}
console.log(fillArray(B));

function fillArray(Arr) {
    for(var i = 0; i < Arr.length; i++){
        for(var j = 0; j < Arr[i].length; j++){
            Arr[i][j] = Math.floor(Math.random()*41 - 21);
        }
    }
    return Arr;
}
