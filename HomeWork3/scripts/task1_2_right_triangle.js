m = 10;
separator = '*';
space = '';
last = '**';

document.write('*<br />');
for (i = 1; i < m; i++) {
    document.write('*');
    document.write(space);
    document.write('*<br />');
    space += '&nbsp;';

    last+= '*';
}
document.write(last);