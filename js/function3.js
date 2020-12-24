let friends=[];
let i=0; // (전역변수)

function input_friend() {
    //id값으로 element 읽어오기
    let namef = document.getElementById('name').value;
    let agef = document.getElementById('age').value;
    let hobbyf = document.getElementById('hobby').value;
    
    let friend = {};
    friend.name = namef;
    friend.age = agef;
    friend.hobby = hobbyf;
    
    friends[i++]=friend;
    console.clear();
    for(friend of friends){
        for(field in friend){
            console.log(friend[field]);
        }
    }
    // console.log(namef.value, agef.value, hobbyf.value);
    // document.getElementById('result').value = namef.value + ','+ agef.value+ ','+ hobbyf.value ;

}

function input_friendList() {
    let namef = document.getElementById('name').value;
    let agef = document.getElementById('age').value;
    let hobbyf = document.getElementById('hobby').value;
    let trTag = document.createElement('tr');
    
    
    let friend = {};
    friend.name = namef;
    friend.age = agef;
    friend.hobby = hobbyf;
    
    friends[i]=friend;
    for(friend of friends){
        trTag.innerHTML;
        for(field in friend){
            document.getElementById('friend').append(trTag);
            let tdTag = document.createElement('td');
            tdTag.innerHTML = friend[field];
            trTag.append(tdTag);
        }
    }
    console.log(friends);


}