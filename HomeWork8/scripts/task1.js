// 1) Сделайте функцию inArray('hello', ['svnj', 'hello', 'cvpoq']), которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать
// текст элемента, а вторым - массив, в котором делается поиск. Функция должна
// возвращать true или false.


function inArray() {
    var args = arguments;
    var string = args[0];
    var Arr = args[1];
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] == string) {
            return true;
        }
    }
    return false;
}