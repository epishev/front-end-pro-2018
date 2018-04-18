// 2) Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 обьекта и возвращает новый, который состоит из свойство обоих обьектов (склеить). Если свойство повторяется, то взять значение второго обьекта
// 3) В задачу п.2 добавить 3ий аргумента flag, который является boolean. Если флаг true, тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго.
//     ```
// assignObjects({...}, {...}, false);
// ```
//
// 4) В задачу п.3, сделать параметр flag не обязательный, если параметр не передать - устанавливать значение false.

var obj1 = {
    x: 10,
    y: 'hello'
},  obj2 = {
    z: 30,
    y: 'buy'
}
function assignObjects() {
    var args = arguments,
        resobj = {},
        obj1 = args[0],
        obj2 = args[1],
        last = args[args.length - 1],
        isLastBool = typeof last == 'boolean',
        flag = isLastBool ? last : false;
    for (var key in obj1) {
        resobj[key] = obj1[key];
    }
    for (var key in obj2) {
        if (flag && resobj[key]) {
            continue;
        }
        resobj[key] = obj2[key];
    }
    return resobj;
}