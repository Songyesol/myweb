// let name1 = window.prompt('숫자를 입력하세요.');
// let name2 = window.prompt('숫자를 입력하세요.');

// diffSum(name1,name2); //입력받은 두 수 사이의 합 15~25
// function diffSum(a, b) {
//     let num1 = parseInt(a);
//     let num2 = parseInt(b);
//     let sum=0;
//         for(let i =num1; i<num2; i++){
//             sum += i;
//             console.log(sum);
//             result = sum;
//         }
//         document.write(result);
//     }


let numAry = [];
let max = 0;
for(let i =0; i<5; i++){
    let num =window.prompt('숫자를 입력하세요.');
    numAry[i]=parseInt(num);
}
console.log(numAry);

findMax();
function findMax(array) {
    for(numb of numAry) {
        if(numb>max){
            max=numb;
        }
    }
    document.write('최대값은 ' + max + '입니다.');
}


// checkGrade(name1); // 90:A ,80:b, 70:c ,ect:d 
// function checkGrade(a) {
//     let score = parseInt(a);
//     if(score>=90){
//         console.log('A');
//     } else if(score>=80) { 
//         console.log('B');
//     } else if (score>=70) {
//         console.log('C');
//     } else {
//         console.log('D');
//     }
// }


// sum(name1,name2);
// function sum(a,b) {
//     let n1 = parseInt(a);//문자열 타입의 숫자를 int 타입으로 바꾸어 줌.
//     let n2 = parseInt(b)
//     console.log(n1 + n2);
// }