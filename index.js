function writeCards(strArr, event){
    let myArr = [];
    for (let i = 0; i<strArr.length; i++){
        myArr.push(`Thank you, ${strArr[i]}, for the wonderful ${event} gift!`);
    }
    return myArr;
}

function countDown(n) {
    let i = n;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}