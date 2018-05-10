// Создать игру:
//
//Есть поле field, является экземпляром класса Field(width, height), предпочитаемые размеры 10 на 10.
//
// Есть герой person, класс Person(name, XPosition, YPosition)
//
//
// Поле являет собой двумерный массив, который состоит из нулей. Там где находится наш герой - стоит 1.
//
// Field имеет такие методы:
// * renderField() - выводит поле в document, устанавливает разделители `<hr />` сверху и снизу
// * clearField() - убирает героя с доски
// * changeSize(newX, newY) - меняет размер поля
//
// Person имеет такие методы:
//     * start() - герой появляется на доске
// * go(direction, step) - движение по пережаном параметру (direction может быть: 'left', 'right', 'top', 'bottom') и с шагом step
// * resetPosition() - перенос в начальную позицию
//
//
// Нужно самим решить какие методы получают аргументы, какие нет. Организовывать код можно любым образом.
//
//     Вызов методов происходит из консоли.
//
//
//     Суть такая:
//
// field.renderField();
// person.start();
// person.go('left', 2);
// person.go('top', 1);
// field.renderField();
//
// последовательно вызываются команды, renderField - отображает новую доску в document. В результате мы должны увидеть 2 нарисованных состояния поля.

function Field(width, height) {
    this.width = width;
    this.height = height;
    var obj = {
        field: function (width, height) {
            var arr = new Array(width);
            for(var i = 0; i < arr.length; i++) {
                arr[i] = new Array(height);
            }
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0;j < arr[i].length;j++) {
                    arr[i][j] = 0;
                }
            }
            return arr;
        }
    }

    var methods = {
        renderField: function () {

        },
        clearField: function () {

        },
        changeSize: function (newX, newY) {

        }
    }
    return Object.assign(Object.create(methods),obj);
}

function Person(name,XPosition,YPosition) {

}