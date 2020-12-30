//Object.html

let fruits = [];

function sum() { 
    fruits[fruits.length]=document.getElementById('fruit').value;
    console.log(fruits);
}

function minus() {
    fruits.pop(document.getElementById('fruit').value) ;
    console.log(fruits);
}