let num = 10, num3 = 20;
let result = num+num3;
console.log("result: "+result+"입니다.");

if(result >30) {
    console.log("30보다 큽니다."); // 콘솔출력
} else {
    document.write("<h1>30보다 작거나 같습니다.</h1>"); 
    //document에 출력하는 것. 태그 작성도 가능
}

var str = 25;
str=1<2;
str=null;
str=function() {
    console.log('function');
}
str=10+20;
console.log(typeof str, str); 
//typeof 변수의 타입을 볼 수 있음
//java처럼 변수형태를 선언하는것이 아니라 변수값이 무엇인지에 따라 변수타입이 정해짐.
var str = 'reload';
console.log(str);
//var로 선언하면 다시 선언해도 됌.

num1=10;
console.log(typeof num1,num1);

let num2 = 20;
// let num2 = 30; 
console.log(typeof num2, num2);
// let은 중복선언이 안됌. (syntax 에러)