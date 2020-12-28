//object.html - number.js

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


