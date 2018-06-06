// 1) Создать персонажа игры-платформера.
//     При нажатии на пробел - прыжок вверх на `h` пикселей.
//     При нажатии на стрелку -> передвижение персонажа на `step` пикселей в сторону (и остальные стрелки)
//
// Персонаж - это квадрат, имеющий размеры 100 на 100 пикселей.
//     Прыжок - это анимация движения объекта вверх на `h` пикселей и возврат в изначальное положение (до прыжка)
//
//
// 2) При нажатии на CTRL персонаж должен "присесть" (уменьшиться в размерах по высоте на 40%, по ширине - увеличится на 15%)
// 3) Дополнительно: при зажатом CTRL персонаж может продолжать двигатся в ЛЕВО и ПРАВО! (т.е. ВВЕРХ и ВНИЗ не работают, ПРОБЕЛ не работает)

window.onload = function () {
    var transformer = document.querySelector('.square'),
        step = 1,
        direction = 1,
        current = 350,
        left = 500,
        canDo = true;

    document.addEventListener('keydown', doJump);
    document.addEventListener('keydown', doSead);
    document.addEventListener('keyup',doUp);
    document.addEventListener('keydown',doStep);

    function doStep(event) {
        if (canDo && event.code == 'ArrowRight') {
            left += step*5;
            transformer.style.left = left + 'px';
        }

        if (canDo && event.code == 'ArrowLeft') {
            left -= step*5;
            transformer.style.left = left + 'px';
        }
    }

    function doSead(event) {
        if (canDo && event.code == "ControlLeft") {
            transformer.style.height = 60 + 'px';
            transformer.style.width = 115 + 'px';
        }
    }

    function doUp(event) {
        if (canDo && event.code == "ControlLeft") {
            transformer.style.height = 100 + 'px';
            transformer.style.width = 100 + 'px';
        }
    }

    var timer;

    function doJump(event) {
        var top = transformer.offsetTop;
        if(canDo && event.code == 'Space') {
            timer = setTimer(top);
            canDo = false;
        }
    }

    function startAnimation(top) {
        current += step*direction;
        transformer.style.bottom = current + 'px';
        if (transformer.offsetTop == top) {
            direction = -direction;
            transformer.style.bottom = 350 + 'px';
            canDo = true;
            clearInterval(timer);
        }
        if (current == 450) {
            direction = -direction;
        }
    }

    function setTimer(top) {
        return setInterval(startAnimation, 1, top);
    }
    
};
