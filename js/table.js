//table.js
//타이틀영역
var tableTag = document.getElementById('tbl');

var trTag1 =document.createElement('tr');

var tdTag1 =document.createElement('td'); 
tdTag1.innerHTML = 'NAME';
tdTag1.setAttribute('id', 'first');
tdTag1.setAttribute('class', 'title');
var tdTag2 = document.createElement('td');
tdTag2.innerHTML = 'AGE';
tdTag2.setAttribute('class', 'title');


//data 영역
var trTag2 = document.createElement('tr');
var tdTag3 = document.createElement('td');
tdTag3.innerHTML = 'HONG';
tdTag3.setAttribute('class', 'data');
var tdTag4 = document.createElement('td');
tdTag4.innerHTML = '25';
tdTag4.setAttribute('class', 'data');

trTag1.append(tdTag1);
trTag1.append(tdTag2);
trTag2.append(tdTag3);
trTag2.append(tdTag4);

console.log(trTag1);
console.log(trTag2);

tableTag.append(trTag1);
tableTag.append(trTag2);
