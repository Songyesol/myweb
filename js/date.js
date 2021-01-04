// let today = new Date('2020-12-15');
// console.log(today.getDate());

// function setCal(yyyy,mm,dd) {
//     let today = new Date(yyyy+'-'+mm+'-'+dd);
//     today = new Date(yyyy,mm,0); //해당월의 마지막날 가져오기
//     console.log(today.getDate());
// }

// setCal('2020','06','05');


// let h1Tag = document.createElement('h1');
// h1Tag.innerHTML = yyyy + '년 ' + mm + "월 달력"; 
// let tableTag = document.createElement('table');
// let trTag = document.createElement('tr');
// tableTag.append(trTag);

function showCal(yyyy,mm) {
let today = new Date(yyyy + "-" + mm + "01");
let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

let year = calendar.getFullYear();
let month = calendar.getMonth();
let today = calendar.getDate();
let weekday = calendar.getDay();



}
showCal(2020, 12);