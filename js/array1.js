//object.html - array1.js

let fruits = ['Apple', 'Banana'];
fruits[2] = 'Melon'; //java와 다르게 배열에 값 추가 가능
fruits[fruits.length]='Orange';
fruits[fruits.length]='Strawberry';
fruits[2] = 'new Melon';
delete fruits[2]; //console 출력 - undefined

// for(let i=0; i<fruits.length ; i++){
//     console.log(fruits[i]);
// }

fruits =[];

//배열 추가
fruits.push('Apple');//배열에 값을 맨 뒤에 추가할때 
fruits.push('Peach');
fruits.unshift('Orange'); // 배열의 맨 앞에 값을 추가할 떄 
fruits.unshift('Melon');

//배열 지우기 
// fruits.pop(); //배열의 맨 마지막 값지우기  
// fruits.shift(); //배열의 맨 앞쪽 값 지우기 

//Melon orange apple peach
//splice는 배열 번호를 지정해서 지정한 배열의 값을 지울 수 있고
// 그것을 변수에 담으면 제거한 배열값이 무엇인지 출력 할 수 있다.
// 맨 뒤에 추가 할 값을 넣으면 비어있는 배열 속에 값을 추가 할 수도 있음. 
let fruit = fruits.splice(1,1); //1번 index에서 부터 1개값 지우겠습니다.
console.log('splice로 제거한 배열 값: ' + fruit);

let newFruit=fruits.splice(1,0,'new Orange', 'new Apple'); //0을 넣으면 삭제하지는 않고 그 자리에 넣겠다는 의미
console.log(newFruit);

for(fruit of fruits){
    console.log(fruit);
}

fruits = ['Apple', 'Banana', 'Mango'];
fruit = {
    name : 'Apple',
    price : 2000,
    weight : 50 
}
fruit['name']; //fruit.name; object는 필드명으로 가져옴
fruits[0]; // 배열은 index값으로 가져옴 

