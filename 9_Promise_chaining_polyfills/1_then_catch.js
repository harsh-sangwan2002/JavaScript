/**********
 * Promise -> Object
 *      * value : undefined, value/err
 *      * state : pending, settled -> resolved, rejected
 */

/***************** Basics of then, catch & finally
 * 1. then is an event listener attached to a promise.
 * 2. You can attach multiple then to the same promise & every then will execute.
 */

const fs = require('fs');
// let promise = fs.promises.readFile('f12.txt');

// promise.then(data => {
//     console.log('Hi! the data is 16: ' + data);
// })

// promise.then(data => {
//     console.log("Buffer format is 20", data);
// })

// promise.then(() => {
//     console.log("I am not accepting.");
// })

/********************** catch 
* 1. catch is an event listener attached to a promise.
* 2. You can attach multiple catch to the same promise & every catch will execute.
*************************/

// promise.catch(err => {
//     console.log('Hi! the data is 29: ' + err);
// })

// promise.catch(err => {
//     console.log("Buffer format is 33", err);
// })

// promise.catch(() => {
//     console.log("I am not accepting data.");
// })

// console.log("Hi");

/********************** finally 
* 1. finally is an event listener attached to a promise.
* 2. You can attach multiple finally to the same promise & every finally will execute.
* 3. finally's callBack will not accept any argument.
*************************/
// promise.finally(function(err){
//     console.log('err is 1',err);
//     console.log('``````````````')
// })

// promise.finally(function(err){
//     console.log('err is 2',err);
//     console.log('``````````````')
// })

// promise.finally(function(err){
//     console.log("I am not accepting.");
//     console.log('I will not execute.')
// })

/************ If a promise is rejected ->
 * if not caught will be converted into an error & program will be haulted.
 * Learning : always catch your promise.
 */

// promise.finally(()=>{
//     console.log("I will always execute.");
// }).catch(err=>{
//     console.log("error is: ",err);
// })

