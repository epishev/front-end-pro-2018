// 3) Сделайте функцию inArray, которая определяет, есть в массиве элемент с
// заданным текстом или нет. Функция первым параметром должна принимать
// текст элемента, а вторым - массив, в котором делается поиск. Функция должна
// возвращать true или false.
// ` inArray('foo', ['sjhfnaof', 'affooasf', 'dfhdfhdfh'])` должно вернуть `true`, т.к. в `affooasf` есть совпадение.

function inArray() {
    var args = arguments;
    var string = args[0];
    var Arr = args[1];
    for (var i = 0; i < Arr.length; i++) {
        var search = Arr[i].indexOf(string,0);
        if ( search !== -1) {
            return true;
        }
    }
    return false;
}