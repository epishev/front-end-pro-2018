// 1) Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции. Класс должен работать следующим образом:
//
//     var elem = new Elem('селектор');
//
// elem.html('!'); //запишет в текст элемента '!'
// elem.append('!'); //запишет в начало элемента '!'
// elem.prepend('!'); //запишет в конец элемента '!'
// elem.attr('class', 'www'); //запишет в атрибут class значение www
//
// //Должны работать цепочки методов:
// elem.html('hello').append('!').prepend('!');
// elem.attr('class', 'www').attr('title', 'hello');


class Elem {
    constructor(selector) {
        this.elem = document.querySelector(selector);
    }

    html(value) {
        this.elem.innerHTML = value;
        return this;
    }

    attr(attr,value) {
        this.elem.setAttribute(attr,value);
        return this;
    }
}