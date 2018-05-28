// 1) Есть 3 `input`, выводить в `textarea` содержимое всех полей ввода через запятую. Использовать setInterval.

window.onload = function () {
    var elems = document.querySelectorAll('input');
    var area = document.querySelector('textarea');
    for (var i = 0;i < elems.length; i++) {
        elems[i].buffer = "";
    }
    setInterval(function () {
        for (var i = 0;i < elems.length; i++) {
            if (elems[i].value !== "" && elems[i].value !== elems[i].buffer) {
                area.value += elems[i].value + ',';
                elems[i].buffer = elems[i].value;
            }
        }
    }, 2000);
}