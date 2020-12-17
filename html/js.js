//js.js
//java와 달리 type을 지정하지 않는 언어. var 라고 선언하고 뒤에 원하는 문구를 작성하면 됌.
var name = document.getElementById('show').innerHTML;
console.log(name);
document.getElementById('show').innerHTML = "World";

//element : tag 이름
var divTag = document.createElement("div");
divTag.innerHTML = "Nice"; //<div>Nice</dic>

document.getElementById('show').after(divTag);
// .append tag는 show값 안에 포함
// .after tag는 show 아래에 따로 태그 

console.log("---------------------------------------------------");

var li= document.createElement("li");
li.innerHTML = "Apple";
var li2 = document.createElement("li");
li2.innerHTML="Orange";
document.getElementById('fruit').append(li, li2);

var grade = 4;
for(var i=1; i<=9; i++){
var str = grade + ' * '+ i +' = ' + (grade*i);
console.log(str);
}

var sum = 0;
for(var i=1; i<=100; i++) {
    sum += i;
} console.log(sum);
