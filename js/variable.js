//main.html - variable.js

let something; //undefine상태 (선언은 되었으나 값을 넣지 않아 변수타입이 정해지지 않은 상태)
something = null;
something = 1 > 2; //boolean type
something = '';

if (something) {
    console.log("참입니다.");
} else {
    console.log("거짓입니다.");
} //값이 들어 있으면 참, 선언만 되어있거나, 할당되어있지 않거나(null) 0이면 거짓

//object (key:value 형식)
//java 클래스와 필드 선언과 조금 비슷(?)
something = { 
    name: "Hong",
    age: 20,
    phone: '010-1234-5678',
}
let name = something.name;
let age = something['age'];

for (field in something) { //something내 필드를 루핑돌면서 field(변수명이기 때문에 아무거나 써도 상관x)에 담아 console에 출력하겠다. 
    console.log(field/*필드명*/,something[field]/*필드값*/);
}

//array
let nameAry = ['Song', 'Park', 'Kim'];
let name1 = nameAry[0];
let name2 = nameAry[1];
nameAry[2] ='Choi'; //name array의 세번째 값을 choi로 바꾸겠다.
let i = 1;
document.write('<table border = "1"  >');
document.write('<tr ><th>'+'순번'+'</th><th>'+'이름'+'</th></tr>');
for(names of nameAry) {
   document.write('<tr><td>'+ i++ +'</td><td>'+names+'</td></tr>');
}
document.write('</table>');

//array의 요소 가져오는 방법 2가지
for(let i = 0; i< nameAry.length; i++) {
    console.log ('nameAry['+i+'] => '+nameAry[i]);
}

for(str of nameAry) {
    console.log(str);
}

