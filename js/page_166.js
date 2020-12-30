//object.html
function input() {
    let h2Tag = document.createElement('h2');
    h2Tag.innerHTML = '입력 양식 데이터 전송버튼';
    document.getElementById('show').append(h2Tag);
    let formTag = document.createElement('form');
    formTag.setAttribute('action','page.jsp');
    formTag.setAttribute('method','get');
    document.getElementById('show').append(formTag);

    let  p1 = document.createElement('p');
    formTag.append(p1);
    p1.innerHTML = '이름: ';
    let inputTag2 = document.createElement('input');
    inputTag2.setAttribute('type','text');
    inputTag2.setAttribute('name','name');
    p1.append(inputTag2);

    let  p2 = document.createElement('p');
    p2.innerHTML = '학과: ';
    formTag.append(p2);
    let inputTag3 = document.createElement('input');
    inputTag3.setAttribute('type','text');
    inputTag3.setAttribute('name','name');
    p2.append(inputTag3);


    let p3 = document.createElement('p');
    p3.innerHTML ="";
    formTag.append(p3);


    let inputTag1 = document.createElement('input');
    inputTag1.setAttribute('type','submit');
    inputTag1.setAttribute('value', '전송');
    inputTag1.innerHTML;
    formTag.append(inputTag1);


    let inputTag4 = document.createElement('input');
    inputTag4.setAttribute('type','reset');
    inputTag4.setAttribute('value', '다시작성');
    inputTag4.innerHTML;
    formTag.append(inputTag4);

}