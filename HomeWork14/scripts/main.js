// 1) Реализовать калькулятор, в котором есть слайдер (`input type=”range”`) и поле ввода (`input type=”number”`).
//
//     Изменяя состояние range меняется состояние поля ввода `number`. И наоборот.
//
//     Реализовать блок-диаграмму, который в пикселях будет отображать значение range.
//     Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.
//
// ![Alt Text](/src/images/img_3.png)
//
// Красный блок - количество комиссии. Комиссия вычисляется по формуле:
//
//     (range < 20) -> 2%
//     (20 - 50)  -> 4%
//     (50 - 75)  -> 6%
//     (75 - 100)  -> 8%
//
//     Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px

window.onload = function () {
    var range = document.querySelector('[type="range"]');
    var number = document.querySelector('[type="number"]');
    var rangeContainer = document.querySelector('.block');
    var block = document.querySelector('.block2');
    var tax = document.querySelector('.block3');

    range.addEventListener('mousedown',function (event) {
        this.addEventListener('mousemove', move);
    });
    range.addEventListener('mouseup', stop);

    number.addEventListener('click',function (event) {
        range.value = this.value;
        rangeDiagramm(range.value,block);
        taxDiagramm(range.value,tax);
    });

    function move(event) {
        number.value = this.value;
        rangeDiagramm(number.value,block);
        taxDiagramm(number.value,tax);
    }

    function stop(event) {
        range.removeEventListener('mousemove', move);
    }

    function rangeDiagramm(value,elem) {
        elem.style.height = value + 'px';
    }
    
    function taxDiagramm(value, elem) {
        if (value <= 20 ) {
            elem.style.height = 2 + 'px';
        } else if (value > 20 && value <= 50) {
            elem.style.height = 4 + 'px';
        } else if (value > 50 && value <= 75) {
            elem.style.height = 6 + 'px';
        } else if (value > 75 && value <= 100){
            elem.style.height = 8 + 'px';
        }
    }



};