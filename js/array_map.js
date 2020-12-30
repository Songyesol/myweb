//array.html
let person = new Object(); //or let person = {}; 또다른 오브젝트 선언방식임
person.name = 'Song';
person.age = 10;

person = {
    name : 'Hong',
    age : 15
}
console.log(person);

function Person(name,age) {
this.name = name;
this.age = age;
}
person = new Person('Park', 20);
console.log(person);

let persons=[];

persons.push(person);
persons.push(new Person('Choi',21));
persons.push(new Person('Hwang', 23));
persons.push(new Person('Kim',24));

let names = persons.map(function(a,b,c){ //mapping은 mapping 한 return값을 또 다른 배열로 생성한다
    console.log(a,b,c);
    let member = {};
    member.id = a.name + '_' + b;
    member.age = a.age;
    return member;
});

console.log(names);

let over21 = persons.filter(function(a,b,c){
    return a.age > 21;
}).map(function(a,b,c){
    return a.name;
});

console.log(over21);

names.forEach(function(a,b,c){
    document.write('<h1>'+a.id+'/'+a.age+'</h1>');
});
