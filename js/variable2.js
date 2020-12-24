


let friends=[]; //array
for( let i = 0; i <3; i++) {
    let name = window.prompt('이름을 입력하세요');
    let age = window.prompt('나이를 입력하세요');
    let friend = {}; //object 
    friend.name = name;
    friend.age = parseInt(age);
    friends[i]=friend;
}
 console.log(friends)

 document.write('<table border ="1"><tr>');
 for ( title in friends[0]) {
     document.write('<td>'+ title+'</td>');
 }
 document.write('</tr>');
 
    for(info of friends) {
        document.write('<tr align = "center">');
        for( field in info){
            document.write('<td>'+ info[field] + '</td>');
        }
        document.write('</tr>');
    }
document.write('</table>');