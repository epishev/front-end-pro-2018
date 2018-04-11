// 1) Функция должна вернуть массив из центральных элементов переданных массивов.
//
//     Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3
//
// Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4



function returnArray() {
    var args = arguments;
    var result = [];

    for ( var i = 0; i < args.length; i++ ) {
        if ( args[i].length % 2 != 0 ) {
            result.push(args[i][Math.floor(args[i].length / 2)]);
        } else {
            result.push(args[i][args[i].length / 2],
                        args[i][args[i].length / 2 - 1]);
        }
    }
    return result;
}