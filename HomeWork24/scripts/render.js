const container = document.querySelector('.container');

function goods(array) {
    container.innerHTML = array.map(item => {
        let goodsForm = `<div class = "block">
        <div><img src="${item.img}"></div>
        <div>${item.title}</div>
        <div>${item.price}${item.currency}</div>
        </div>`;
        return goodsForm;
    }).join('');
}

module.exports = {
    goods,
    container
};