
function myFunc() {
    document.write("<ul><li>Apple</li><li>Banana</li><li>Strawberry</li></ul>");
    let dan = 4;
    document.write('<tr>');
    for (let i =1; i<=10; i++) {
            document.write('<td>' +dan + '*'+ i +'</td>'+'<td>'+'=' +'</td>'+ '<td><b>'+(dan*i)+'</b></td>' +'</td>');
    }
    document.write('</tr>')
}
