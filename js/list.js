
//main.html
function myFunc() {
    document.write("<ul><li>Apple</li><li>Banana</li><li>Strawberry</li></ul>");
    let dan = 4;
    document.write('<table border="1" style = "width:50" >');
    for (let i =1; i<10; i++) {
            document.write('<tr align = "center"><td>' +dan + '*'+ i +'</td>'+'<td>'+'=' +'</td>'+ '<td>'+(dan*i)+'</td>' +'</td></tr>');
    }
    document.write('</table>');
    
    document.write('<table border="2" style= "width:100px">');
        for(let i =2; i<10;i++ ){
            for(let j=1; j<10; j++) {
                document.write('<tr align="center"><td>'+i + "*" + j+"</td><td>" + "=" + '</td><td>'+(i*j)+'</td></tr>')
            }
        }
    document.write('</table>');

}
