// Создать игру:
//
//     Есть поле field, является экземпляром класса Field(width, height), предпочитаемые размеры 10 на 10.
//
// Есть герой person, класс Person(name, XPosition, YPosition)
//
//
// Поле являет собой двумерный массив, который состоит из нулей. Там где находится наш герой - стоит 1.
//
// Field имеет такие методы:
//     * renderField() - выводит поле в document, устанавливает разделители `<hr />` сверху и снизу
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
//     field.renderField();
// person.start();
// person.go('left', 2);
// person.go('top', 1);
// field.renderField();
//
// последовательно вызываются команды, renderField - отображает новую доску в document. В результате мы должны увидеть 2 нарисованных состояния поля.


function Field(width, height) {
    this.field = new Array(width);
    for (var i = 0; i < this.field.length; i++) {
        this.field[i] = new Array(height);
        for (var j = 0; j < this.field[i].length; j ++) {
            this.field[i][j] = 0;
        }
    }

    person = new Person('Vasia');


};

Field.prototype.renderField = function (separator) {
    separator = separator || '-';
            var resSep = '';
            for (var i = 0; i < this.field.length; i++) {
                for (var j = 0; j < this.field[i].length; j++) {
                    document.write(this.field[i][j] + ' ');
                }
                document.write('<br />');
            }
            for (var i = 0; i < this.field[0].length; i++) {
                resSep += separator;
            }
            document.write(resSep);
            document.write('<br />');

};
Field.prototype.clearField = function () {

};
Field.prototype.changeSize = function (newX, newY) {
    this.field = new Array(newX);
    for (var i = 0; i < this.field.length; i++) {
        this.field[i] = new Array(newY);
        for (var j = 0; j < this.field[i].length; j ++) {
            this.field[i][j] = 0;
        }
    }
};

function Person(name, XPosition, YPosition) {
    this.XPosition = (XPosition == undefined) ? 5 : XPosition;
    this.YPosition = (YPosition == undefined) ? 5 : YPosition;
}


// Person.prototype.start = function (XPosition, YPosition) {
//     this.field[XPosition][YPosition] = 1;
// }

Person.prototype.go = function (direction, step) {

}