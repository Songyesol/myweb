//main.html- function.js
function sum(num1,num2) { //function 정의문
    let result = num1+num2;
    console.log(result);
    return result;//return 구문이 있으면 result라고 하는 변수에 담겠다....
}
let result = sum('10','20'); //function 호출 (정의문만 있다고 해서 호출이 되는 것은 아니다)
document.write('<h1>'+ result+'</h1>');

let myfunc = function(a, b) {
    let result = a*b;
    console.log('Hello');
    return result;
}
result = myfunc();
console.log (result);


let yourfunc = myfunc;
result = yourfunc(5,4);

console.log(result);

let theotherfunc = function(n1,n2) {
    return n1/n2;
}
function otherfunc(a, b, fundef){
    let result = fundef(a,b);
    console.log('result:'+ result);
}
otherfunc(40,20,theotherfunc); //funtion이 또다른 function의 매개값으로 오는 것 -> call back function
