/************************* Shallow Copy
 * Copies non-primitive values on the first level 
 * *************************/

// 1. Spread operator
let arr = [1,2,3,4,5];
let arr2 = [...arr];
arr2.pop();
console.log(arr);

arr = [1,2,3,[4,5,6],7];
arr2 = [...arr];
arr2[3][1] = 90;
console.log(arr);

/************************* Deep Copy
 * Copies non-primitive values at all levels
 * Obj -> JSON.stringify after JSON.parse
 * cons -> It is very slow
 * *************************/

