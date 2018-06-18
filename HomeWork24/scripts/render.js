const container = document.querySelector('.container');

function goods(array) {
    container.innerHTML = '';
    for (let i=0; i < array.length; i++) {
        let goodsForm = '';
        goodsForm += '<div class = "block">';
        goodsForm += `<div><img src="${array[i].img}"></div>`;
        goodsForm += `<div>${array[i].title}</div>`;
        goodsForm += `<div>${array[i].price}${array[i].currency}</div>`;
        goodsForm += '</div>';

        container.innerHTML += goodsForm;
    }
}

module.exports = {
    goods,
    container
};