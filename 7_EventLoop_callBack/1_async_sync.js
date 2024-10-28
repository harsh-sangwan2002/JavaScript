/*************
 * Synchronous -> The code is executed line-by-line.
 *************/

// console.log("Before");

// function fn(){
//     console.log("I am fn.");
// }
// fn();

// console.log("After");

/*************
 * Asynchronous -> A part of executed first & a part of code is delayed 
 * and that part is executed later on.
 *************/
console.log("Before");

function fn(){
    console.log("I am fn.");
}
// A function gievn to you by the browser that executes the function at least after the specified interval.
setTimeout(fn,2000);

console.log("After");