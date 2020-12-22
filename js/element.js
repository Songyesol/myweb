let show = document.getElementById('show'); //getElementId는 id값이 ()인 element 자체를 불러옴.
console.log(show.getAttribute('id')); //id값 불러옴
console.log(show.id); //직접 id attribute를 읽어옴.
console.log(show.innerHTML); //attribute value(값)을 불러옴.

function turnOn() {
    let img1 = document.getElementsByTagName('img');
    img1[0].src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    console.log(img1[0]);
}
function turnOff() {
    let img2 = document.getElementsByTagName('img');
    img2[0].src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    console.log(img2[0]);
}