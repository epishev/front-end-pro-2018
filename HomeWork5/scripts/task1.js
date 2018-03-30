// 1) В одномерном массиве произвести такую замену:
//     1 элемент поменять с 2
// 3 элемент поменять с 4
// 5 элемент поменять с 6
// и тд
// Если массив непарный - последний элемент не трогать.<br><br>
// было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5

var n = 11;
var Arr = new Array(n);
var buffer = 0;
for (var i = 0; i < Arr.length; i++) {
    Arr[i] = Math.floor(Math.random()*10);
}
console.log(Arr);

for (var i = 0; i < Arr.length; i++) {
    if (i == 0 || i % 2 == 0) {
        buffer = Arr[i];
    } else {
        Arr[i - 1] = Arr[i];
        Arr[i] = buffer;
        buffer = 0;
    }
}
console.log(Arr);