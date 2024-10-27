/***************************
 * 1. forEach -> Traverse over each element of the array.
 ***************************/

let arr = [1, 2, 3, 4, 5];
// arr.forEach((ele)=>console.log(ele));

/***************************
 * 2. map -> Traverse over each element of the array & returns the modified array elements.
 ***************************/
Array.prototype.myMap = function (cb) {

    let res = [];

    this.forEach(ele => res.push(cb(ele)));

    return res;
}

const square = (ele) => ele * ele;
const cube = (ele) => ele * ele * ele;

let res = arr.myMap(square);
let res2 = arr.myMap(cube);
// console.log(res);
// console.log(res2);

/***************************
 * 3. filter -> Traverse over each element of the array & filters out the matching elements.
 ***************************/

function isOdd(ele) {
    return ele % 2 === 0 ? false : true;
}

function isGreater5(ele) {
    return ele > 5 ? true : false;
}

Array.prototype.myFilter = function(cb){

    let res = [];

    this.forEach((ele)=>{

        if(cb(ele))
            res.push(ele);
    })

    return res;
}

res = arr.filter(isOdd);
res2 = arr.filter(isGreater5);
// console.log(res);
// console.log(res2);

/***************************
 * 4. reduce -> Traverse over each element of the array & returns a single element as the answer.
 ***************************/

function sum(a,b){
    return a+b;
}

Array.prototype.myReduce = function(cb,init){

    let res = init;

    this.forEach(ele=>res=cb(res,ele));

    return res;
}

res = arr.myReduce(sum,2);
console.log(res);