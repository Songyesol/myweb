//object.html

let numbers = [34,55,22,10,100,6,7];
numbers.sort(function(a,b) {
    return a - b; //오름차순으로 정렬 
    // return b-a; //내림차순으로 정렬
});
// console.log(numbers);

let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);
let sum =0;
numbers.forEach(function (a ,b, c){ //foreach는 매개값 3개 받음 (a= 배열에 들어있는 요소값 b=인덱스 값 c=배열)
    sum += a;
console.log(a,b);
let liTag =document.createElement('li');
liTag.innerHTML = a; 
ulTag.append(liTag);
}); //배열의 각각의 요소들에 대해서 반복하며  매개변수 내의 내용을 실행하고 싶다 

let liTag =document.createElement('li');
liTag.innerHTML = "합계: " + sum; 
ulTag.append(liTag);