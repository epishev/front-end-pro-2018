var model = {
    response: []
};
function load() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open('GET', '/data.json', true);
        xhr.send();

        xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status != 200 || xhr.responseText == '{}') {
                reject(xhr);
            } else {
                let res = JSON.parse(xhr.responseText);

                model.response = res;
                resolve(res)

            }
        }
    });
};


function sortByPrice(array) {
    return array.sort((a,b) => {
        return parseInt(a.price) - parseInt(b.price);
    });
};

function sortByTitle(array) {
    return array.sort((a, b) => { return a.title.localeCompare(b.title); });
    };

function getGoods(array,value) {
    let resArr = [];
    for (good of array) {
        for(key in good) {
            if (good[key].toString().indexOf(value) !== -1) {
                resArr.push(good);
            }
        }
    }
    return resArr;
}

function getResponse() {
    return model.response;
}

function setResponse(resp) {
    model.response = resp;
}

module.exports = {
     load,
     sortByPrice,
     sortByTitle,
     getGoods,
     getResponse,
     setResponse,
     model
};