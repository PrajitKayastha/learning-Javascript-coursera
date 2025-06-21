let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();

}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count;
}

function decreaseCount(){
    count--;
    displayCount();
}

function  checkCountValue(){
    if(count === 10){
        alert("Your Instagram post gained 10 followers! Congratulations!");
    }
    else if(count === 20){
        alert("Your Instagram post gained 20 followers! Congratulations!");
    }
}

function reset(){
    if(count != 0){
        count = 0;
        alert("Followers count has  been reset");
        displayCount();
    }
    else{
        alert("There are no followers to reset");
    }
}