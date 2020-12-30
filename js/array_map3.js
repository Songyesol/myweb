//reduce() -> 처리를 집계 
let students = [];
for(let i =1 ; i<=5 ;i++ ) {
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i % 2 == 0 ? 'M' : 'F';
    std.score = 80 + i ;
    students.push (std); 
}

let result = students.every(function(a,b,c){
return a.score >81;
}); 
//every()는 전체데이터가 모든 조건을 만족하면 true, 안돼면 false
console.log(result);

result = students.some(function(a,b,c){
    return a.score >81;
}); 
//some()은 제시한 조건 중 하나라도 만족하면 true
console.log(result);

result = students.map(function(a){
    return a.sname;
}).indexOf('Hong1'); //찾고자하는 문자열 또는 숫자가 배열의 몇번째 위치에 있는지 index값을 보여줌
console.log(result);