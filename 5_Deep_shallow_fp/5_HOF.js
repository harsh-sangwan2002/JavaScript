// HOF -> is a function that recieves a "fn" as a parameter or returns a function.
// cb -> is a function that is passed to HOF to be called later on in the program.

function transformer(arr,cb){

    let newArr = [];

    arr.forEach(ele=>newArr.push(cb(ele)));

    return newArr;
}

function squareCb(val){
    return val*val;
}

function cubeCb(val){
    return val*val*val;
}

function extractFirstName(obj){
    return obj['name'];
}


let arr = [1,2,3,4,5,6];
let metaArr = [{name:"Steve",lastName:"Rogers"},{name:"Bruce",lastName:"Wayne"}];

let res = transformer(arr,squareCb);
let res2 = transformer(metaArr,extractFirstName);
console.log(res);
console.log(res2);