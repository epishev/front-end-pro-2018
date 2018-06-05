// 1) Создать форму по отправке имени и возраста.
//     Сделать валидацию данных (в имени не может быть чисел, в возрасте букв).
//     При успешной валидации сформировать отправку данных с формы на url `/registration`.
//     В результате ничего в ответе мы не должны получить (кроме ошибки 404).
//     Суть - отправка данных с валидацией.

window.onload = function () {
    var form = document.querySelector('form');
    var submit = document.querySelector('#v3');

    submit.addEventListener('click', function () {
        if(validate(form)) {
            var obj = {name: form.elements.name.value, age: form.elements.age.value};
            console.log(obj);
            doAjax('POST','/registration',obj);
        };
    });

    function showError(container, errorMessage) {
        container.className = 'error';
        var errMsg = document.createElement('span');
        errMsg.className = "error-message";
        errMsg.innerHTML = errorMessage;
        container.appendChild(errMsg);
    }

    function resetError(container) {
        container.className = '';
        if (container.lastChild.className == "error-message") {
            container.removeChild(container.lastChild);
        }
    }

    function validate(form) {
        var elems = form.elements;
        var result = false;

        resetError(elems.name.parentNode);
        if (!elems.name.value) {
            showError(elems.name.parentNode, 'Введите имя!');
            result = false;
        }

        resetError(elems.name.parentNode);
        if (elems.name.value.match(/\d/g) !== null) {
            showError(elems.name.parentNode, 'Имя должно состоять только из букв!');
            result = false;
        }

        resetError(elems.age.parentNode);
        if (!elems.age.parentNode) {
            showError(elems.age.parentNode, 'Введите возраст!')
            result = false;
        }

        resetError(elems.age.parentNode);
        if (elems.age.value.match(/[a-zA-Z]+/g) !== null) {
            showError(elems.age.parentNode, 'Возраст должен состоять только из цифр!')
            result = false;
        }

        if (elems.age.value.match(/[a-zA-Z]+/g) == null && elems.name.value.match(/\d/g) == null) {
            result = true;
        }

        return result;
    }

        function doAjax(method, path, body) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();

                xhr.open(method, path);
                xhr.send(body);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState != 4) {
                        return;
                    }

                    if (xhr.status != 200 || xhr.responseText == '{}') {
                        reject(xhr);
                    } else {
                        resolve(JSON.parse(xhr.responseText));
                    }
                }
            });

        }
}