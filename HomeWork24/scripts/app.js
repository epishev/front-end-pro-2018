const render = require('./render.js');
const data = require('./data.js');
const buttonPrice = document.querySelector('#Price');
const buttonName = document.querySelector('#Title');
const buttonSearch = document.querySelector('#Search');
const inputSearch = document.querySelector('#input');
const buttonReset = document.querySelector('#reset');

data.load().then(resp => {
        render.goods(resp);
});

buttonName.addEventListener('click',function () {
    render.goods(data.sortByTitle(data.getResponse()));
});

buttonPrice.addEventListener('click',function () {
    render.goods(data.sortByPrice(data.getResponse()));
});

buttonSearch.addEventListener('click',function () {
        render.goods(data.getGoods(data.getResponse(),inputSearch.value));
});

buttonReset.addEventListener('click',function () {
    render.goods(data.getResponse());
});












