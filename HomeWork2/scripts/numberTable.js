document.writeln('<table border = "1">');
for (var i = 1; i <= 100; i++) {
    if ( i % 2 === 0) {
        document.writeln('<tr><td>' + i + '</td>></tr>');
    }
}
document.write('</table>');