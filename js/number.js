//object.html - number.js
let x = 10; //정수타입이 들어오면 정수연산, 실수타입이 들어오면 실수연산.
let y = '5';

let result = x/y;
let result2 =x+parseFloat(y); 
result2=x/0;
console.log(result); // 결과 1020 --> 더하기는 숫자+문자열은 문자열로 인식 
                        // 곱하기* 나누기/는 자동으로 숫자로 인식함.
console.log(result2);

function sum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    console.log(parseInt(num1)+parseInt(num2)); 
    //얘네가 가져오는 값은 string 타입이기 때문에 int형으로 바꾸어주어야한다.
}
