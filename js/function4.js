let ulTag = document.createElement('ul');
ulTag.innerHTML = 'Fruit';
ulTag.id = 'fruits';

let liTag = document.createElement('li');
liTag.innerHTML = 'banana';
let liTag1 = document.createElement('li');
liTag1.innerHTML = 'orange';

ulTag.append(liTag);
ulTag.append(liTag1); //append 자식으로 붙여줌
document.getElementById('show').append(ulTag);
console.log(ulTag);

function input_friend() {
    let fruit = document.getElementById('fruit').value;
    console.log(fruit);
    liTag2=document.createElement('li');
    liTag2.innerHTML = fruit;
    document.getElementById('fruits').append(liTag2);
    document.getElementById('fruit').value = ' ';
}