/************************** 
 * In JS
 * 1. Primitives - number, string, boolean, null, undefined
 *    bigInt, symbol
 * 2. Everything else is an object
 * **************************/

/**************************
 * What is an object?
 *     -{Key: value} pair
 *     Can have properties and methods inside.
 *  *************************/

// let cap = {
//     name:"Steve",
//     sayHi:function(){
//         console.log("Hi! from Steve.");
//     }
// }

// let arr = [1, 2, 3, 4, 5];
// console.log("22", arr[5]);
// console.log("23", arr["abracadabra"]);

// // How do I prove that an array is an object?
// arr.prop = "I am a property inside arr object";
// arr.fn = function () {
//     console.log("fn said hi!");
//     return "returning from the method.";
// }

// console.log(arr.prop);
// console.log(arr.fn);
// console.log(arr);

/************************** 
 * Functions: Function is an object that implements callable
 * Special type of object which can be invoked directly
***************************/

function fn(){
    console.log("Hello from fn.");
}

fn.prop = "1st prop";
fn.myFunc = function(){
    console.log("This is my myFn.");
}
console.log(fn);
console.dir(fn);