/******************************* Call by value/ref
 * 1. rhs -> non-primitve
 *      lhs -> gets the address
 * 2. rhs -> primitve
 *      lhs -> gets the value
 * *************************/

// Call by sharing

let arr = [1,2,3,4,5];
let arr2 = arr;

arr2.pop();

console.log(arr);
console.log(arr2);

function modifier(a,b){

    console.log(a,b);
    a[0] = 20;
    b[1] = 30;
    console.log(a,b);
}

let p = [1,2,3];
let q = [4,5,6];
modifier(p,q);
console.log(p,q);