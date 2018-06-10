// # Практика
//
// 1. Реализовать контекстное меню. Список хранить в памяти.
//
// 2. Применить меню к домашке с лекции №15 (персонаж). Создать actions: Jump, Remove, ChangeColor
//
// 3. Меню должно всегда открыватся в окне, не создавая скрола.

window.onload = function () {
    contextmenu = {
        actions: [{title: 'Jump', handler: jump},
                  {title: 'Remove', handler: remove},
                  {title: 'changeColor', handler: changeColor}]
    }

    var block = document.querySelector('.menu');
    var mainBlock = document.querySelector('.block');

    document.addEventListener('contextmenu',function (event) {
        event.preventDefault();

        mainBlock.addEventListener('contextmenu', function (event) {
               block.style.left = event.pageX + 'px';
               block.style.top = event.pageY + 'px';
               block.classList.add('show');
        });
        document.addEventListener('click', close);

    });

block.addEventListener('click', function (event) {
    document.removeEventListener('click',close);
});

    for(var i = 0; i < contextmenu.actions.length; i++) {
        var div = document.createElement('div');

        div.classList.add('item');
        div.innerHTML = window.contextmenu.actions[i].title;
        div.onclick = window[contextmenu.actions[i].handler];
        block.appendChild(div);
    }

    function close(event) {
        block.classList.remove('show');
    }

    function jump() {

    }

    function remove() {

    }

    function changeColor() {
        var a = prompt('Введите цвет');
    }



}