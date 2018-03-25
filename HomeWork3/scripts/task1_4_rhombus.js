const separator = '*';
const space = '&nbsp;';
const next  = '<br />';
var a = 51;
var b = Math.round(a / 2 - 1);
var c = Math.round(a / 2 + 1);


for (var i = 1; i <= a; i++) {
    if ( i === Math.round(a / 2)) {
        document.write(separator);
    } else {
        document.write(space);
    }
}
document.write(next);

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

b = 2;
c = (a % 2 === 0) ? a - 2 : a - 1;

for (var i = 1; i <= Math.round(a / 2 - 2); i++) {
    for (var j = 1; j <= a; j++) {
        if (j == b || j == c) {
            document.write(separator);
        } else {
            document.write(space);
        }
    }
    document.write(next);
    b++;
    c--;
}

for (var i = 1; i <= a; i++) {
    if ( i === Math.round(a / 2)) {
        document.write(separator);
    } else {
        document.write(space);
    }
}






