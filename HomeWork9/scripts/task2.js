// 2) Дана строка вида &#39;var_text_hello&#39;. Сделайте из него текст &#39;varTextHello&#39;.

var str = '&#39;var_text_hello&#39;.'
var resString = '';
for (var i = 0; i < str.length; i++) {
     if ( str[i] == '_') {
         continue;
     }
     if ( (str[i] == 't' && i < 10) || str[i] == 'h' ) {
         var upper = str[i].toUpperCase();
         resString += upper;
         continue;
     }
    resString += str[i];
}
console.log(resString);