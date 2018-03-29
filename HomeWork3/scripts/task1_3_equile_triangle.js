const separator = '*';
const space = '&nbsp;';
const next  = '<br />';
var a = 31;
var last = '';
var b = Math.round(a / 2);
var c = Math.round(a / 2);
var d = (a % 2 === 0) ? a - 1 : a;

for (var i = 1; i <= Math.round(a / 2 - 1); i++) {
    for (var j = 1; j <= a; j++) {
        if (j == b || j == c) {
            document.write(separator);
        } else {
            document.write(space);
        }
    }
    document.write(next);
    b--;
    c++;
}
for (var i = 1; i <= d; i++) {
    last += separator;
}
document.write(last);






