// 3. Дано `a = 1, b = 15;`. Вывести на экран таблицу, которая будет состоять из 2-ух рядков.
// В 1-ом рядке - нечетные числа: `13579111315`, в 2-ом - четные: `2468101214`

var a = 1;
var b = 15;
var res1 = '';
var res2 = '';

for (var i = a; i <= b; i++) {
    if ( i % 2 != 0) {
        res1 += i;
    } else {
        res2 += i;
    }
}
document.write('<table border="1"><tr><td>');

document.write(res1 + '</td></tr><tr><td>' + res2);

document.write('</td></tr></table>');
