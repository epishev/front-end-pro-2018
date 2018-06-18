// 1)  Создать у объекта геттер, который возвращает коллизию значение obj.list_1 и obj.list_2 (оба свойства - массивы чисел).
// Коллизия - совпадение элементов по значению.
//
// 2) Добавить всем массивам геттер - render, который будет выводить одномерный или двумерный массив в документ, в виде таблицы.

var obj = {
    list_1:[1,2,4,3,5,6,6],
    list_2: [3,5,6,7,7,4,4,4,4],
    get colision() {
        let resArray = new Array();
        for (let i = 0; i < this.list_1.length; i++) {
            for (let j = 0; j < this.list_2.length; j++) {
                if (this.list_1[i] == this.list_2[i]) {
                    resArray.push(this.list_1[i]);
                }
            }
        }
        for(let i = 0; i < resArray.length; i++) {
            if (resArray[i + 1] == resArray[i]) {
                resArray.splice(i,1);
                i--;
            }
        }
        return resArray;
    },

    get render() {
        document.write('<table>');
        for (let i = 0; i < this.list_1.length; i++) {
            if (typeof this.list_1[i] !== number)
            document.write('<tr><td>' + this.list_1[i] + '</tr></td>');
        }
        document.write('</table>');
    }
}