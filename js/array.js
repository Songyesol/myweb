let friend1 = {
    name: '감귤',
    age: 20,
    hobby: '귤 껍질까기'
}
let friend2 = {
    name: '레드향',
    age: 20,
    hobby: '레드향 껍질까기'
}
let friend3 = {
    name: '카라카라 오렌지',
    age: 20,
    hobby: '카라카라 오렌지 껍질까기'
}
let friends = [friend1, friend2, friend3];

document.write('<table border="1"><tr>');
for (field in friend1) {
    document.write('<th>' + field + '</th>');
}
document.write('</tr>');
for (friend of friends) {
    document.write('<tr>');
    for (field in friend) {
        document.write('<td>' + friend[field] + '</td>');
    }
    document.write('</tr>');

}
document.write('</table>');

// document.write('<table border="1">');
// document.write('<tr><th>이름</th><th>나이</th><th>취미</th></tr>');
// for (chingu of friends) {
//     document.write(
//         '<tr><td>' + chingu.name + '</td><td>' + chingu.age + '</td><td>' + chingu.hobby +
//         '</td></tr>'
//     );
// }
// document.write('</table>');



let numbers = [3, 4, 8, 9, 12, 83, 22];
let sum = 0;
let max = 0;
for (num of numbers) {
    if (num % 2 == 0) 
        sum += num;
    console.log(num);
}
console.log("합계: " + sum);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("가장 큰 수 : " + max)