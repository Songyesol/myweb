//object.html -string.js
let str = 'Please locate where "locate" occurs!';
let strLeng = str.length;
console.log(strLeng);

//indexOf, lastIndexOf, search 
strLeng = str.indexOf('locate',13);
console.log(strLeng); // - 해당되는 문자열이 있는 위치를 index값으로 보여줌
                     // 있으면 index 번호로 알려주고 없으면 -1로 보여줌
console.log(str.search('locate'));// indexOf와 같음


strLeng=str.lastIndexOf('locate');
console.log(strLeng);

//slice, substring, substr - 범위지정
let fruit = 'Apple, Banana, kiwi';
console.log(fruit.slice(7,13)); //0부터 시작해서 4번째 값까지 출력

let from = fruit.indexOf('Banana');
let result = fruit.substring(from,from + 6);

result=fruit.substr(from, 6); // from에서 시작해 6번째 문자열 까지 잘라서 가져옴
console.log(result);

// replace - 문자열 치환
let newFruit = fruit.replace('Banana', 'Orange');
console.clear();
console.log(newFruit);

//toUpperCase(대문자변경), toLowerCase(소문자변경), concat(두 문자열 연결), trim(좌우여백 자르기)
//padStart, padEnd

console.log('good      hello                  '.trim().toUpperCase()); //좌우에 아무것도 없이 비어있는 영역만 잘라내는 것
console.log('5'.padStart(4,  '0')); //네자리 크기만큼 비어있는 영역을 0으로 왼쪽 여백을 채운다.
// console.log('5',padEnd(4, '0'));

let uri='http://www.naver.net';
console.log(uri.replace('net','com'));
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')), '.com'));

//split -- 괄호 안의 문자를 삭제하고 결과값을 배열로 만들어줌 
let fruits = fruit.split(',');
for( f of fruits) {
    console.log(f.trim);
}

//990101-1234567 (남)
//990102-2345678 (여)
//000201-3456789 (남)
//000301-4567890 (여)

//2000년 이전, 이후 구분 ->1,3은 남자
//2000년 이전 이후, 구분 -> 2,4는 여자

let numbers = '990101-1234567';
numbers += '  990102-2345678';
numbers += '  000201-3456789';
numbers += '  000301-4567890';
numbers += '  '
let numAry = numbers.split('  ');
for(nums of numAry) {
    result = getGender(nums);
    console.log('결과: ' + result);
}

function getGender(num) {
    let fNum = num.replace('-','').substr(6,1);
    if(num.substr(0,2) =='99' && fNum== '1'){
        return '2000년 이전 출생 남성입니다';
    } else if (num.substr(0,2) =='00' && fNum== '3'){
        return '2000년 이후 출생 남성입니다.';  
    } else if (num.substr(0,2) =='99' && fNum == '2'){
            return '2000년 이전 출생 여성입니다';
    } else if (num.substr(0,2) =='00' && fNum == '4'){
            return '2000년 이후 출생 여성입니다.';
    }
        
    
    


}




