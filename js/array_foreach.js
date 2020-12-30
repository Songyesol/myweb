//object.html
let persons =['Hong', 'Hwang', 'Park', 'Choi'];
persons.forEach(myCallBack);


function myCallBack(a,b,c){
    console.log(a,b,c);
}

persons = [];
let person = {
    name: '송예솔',
    age: 29,
    score: 90
}
persons.push(person);

let person1 ={};
person1.name = '송구리';
person1.age = 22;
person1.score = 40;

persons.push(person1);

let person2 ={};
person2.name = '호호';
person2.age = 25;
person2.score = 89;

persons.push(person2);

let person3 ={};
person3.name = '깔깔깔';
person3.age = 27;
person3.score = 66;

persons.push(person3);

console.log(persons);

let tableTag = document.createElement('table');
tableTag.setAttribute('border','1');
document.getElementById('show').append(tableTag);

function drawTable() {
    let trTag = document.createElement('tr');
tableTag.append(trTag);

let thTag = document.createElement('th');
thTag.innerHTML='이름';
let thTag1 = document.createElement('th');
thTag1.innerHTML = '나이';
let thTag2 = document.createElement('th');
thTag2.innerHTML='점수';
trTag.append(thTag, thTag1, thTag2);

persons.forEach(myCallfunction); 
}

function myCallfunction(a,b,c){//데이터 생성용 callback함수
    let trTag2 = document.createElement('tr');
    tableTag.append(trTag2);
    for(field in a) {
    let tdTag1=document.createElement('td');
    tdTag1.innerHTML = a[field];
    trTag2.append(tdTag1);
    }
}
