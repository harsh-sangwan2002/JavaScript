const fs = require('fs');

/******
 * Promise -> Don't take any callback function but instead returns a promise.
 *****/
// console.log("Before");

const promise = fs.promises.readFile('f1.txt');
// initially the promise is in pending state
console.log(promise); 

console.log("After");

setTimeout(()=>{

    // When promise gets the data -> value is visible
    console.log(promise);
},1000)