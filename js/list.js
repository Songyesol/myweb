
function myFunc() {
    document.write("<ul><li>Apple</li><li>Banana</li><li>Strawberry</li></ul>");
    let dan = 4;
    document.write('<table border="1" style = "width:50">');
    for (let i =1; i<=10; i++) {
            document.write('<tr><td>' +dan + '*'+ i +'</td>'+'<td>'+'=' +'</td>'+ '<td>'+(dan*i)+'</td>' +'</td></tr>');
    }
    document.write('</table>');

}
