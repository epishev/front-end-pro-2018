
function load(path,method) {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open(method,path, true);
        xhr.send();

        xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status != 200 || xhr.responseText == '{}') {
                reject(xhr);
            } else {
                let res = JSON.parse(xhr.responseText);
                resolve(res)

            }
        }
    });
};

function executeRequests(list) {
   return list.map((item) => {
       return load(item.forks_url, 'GET');
    });
}

function render(array,container) {
    container.innerHTML =
    array.map((item) => {
       let strings = `<li>${item.name}</li>`;
       return strings;
    }).join('');
}






module.exports = {
    load,
    render,
    executeRequests
};