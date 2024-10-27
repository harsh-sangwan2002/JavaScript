// HOF -> is a function that recieves a "fn" as a parameter or returns a function.
// cb -> is a function that is passed to HOF to be called later on in the program.
/************* Use case of HOF -> fn with similar behaviour can be grouped inside a single parent object. 
 * 
***************/

function transformer(arr, cb) {

    let newArr = [];

    arr.forEach(ele => newArr.push(cb(ele)));

    return newArr;
}

function squareCb(val) {
    return val * val;
}

function cubeCb(val) {
    return val * val * val;
}

function extractKey(obj) {
    return obj['name'];
}


let arr = [1, 2, 3, 4, 5, 6];
// let metaArr = [{name:"Steve",lastName:"Rogers"},{name:"Bruce",lastName:"Wayne"}];

// let res = transformer(arr,squareCb);
// let res2 = transformer(metaArr,extractKey);
// console.log(res);
// console.log(res2);

/*************************** 1.map -> transforms every element of the array **********************/
let cubedRes = arr.map(cubeCb);
console.log(cubedRes);

/*************************** 2.filter -> returns an array of elements for which the cond. holds true **********************/
function isOdd(num) {
    return num % 2 == 0 ? false : true;
}

let oddNumbers = arr.filter(isOdd);
console.log(oddNumbers);

/*************************** 3.forEach -> loops through the array and doesn't return anything **********************/
arr.forEach((val,idx)=>{
    console.log(idx,val);
})

/*************************** 4.reduce -> returns a single value at the end **********************/
function sum(acc,ele){
    return acc+ele;
}

let res = arr.reduce(sum,10);
console.log(res);