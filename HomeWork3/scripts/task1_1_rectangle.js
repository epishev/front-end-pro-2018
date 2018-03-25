var a = 10;
var b = 5;
var separator = '*';
var space = '';
var last = '';

for (var i = 0; i < a; i++ ) {
    document.write(separator);
    if (i >= 2) {
        space += '&nbsp;';
    }
    last += '*';
}
document.write('<br />');
for (var i = 2; i < b; i++){
    document.write(separator + space + separator + '<br />');
}
document.write(last);