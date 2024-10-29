const fs = require('fs');
/**************** Promise is resolved 
 * // resolving -> something has went right
 * Different ways in which you can get a resolved promise 
 * 1. Promise.resolve
 * 2. Getting a resolved value from a promise based fn
 * 3. from a chained then if then above you returns a value or above 2 points
 */

/************************* 1.Promise.resolve **********************/
// let pr = Promise.resolve(100);

// console.log(pr);
// pr.then(function (data) {
//     console.log("84: ", data);
// })

/************************* 2.Getting a resolved value **********************/
// pr = fs.promises.readFile('f1.txt');
// pr.then(data => {
//     console.log(data.toString())
// }).catch(err => {
//     console.log(err);
// })

// a. first then returns a value
// Promise.resolve('Promise resolved')
//     .then(data => {
//         console.log("29", data);
//         return 10;
//     }).then(data => {
//         console.log("32", data);
//     })

// b. first then doesn't return anything
// Promise.resolve('Promise resolved')
//     .then(data => {
//         console.log("29", data);
//     }).then(data => {
//         console.log("32", data);
//     });

// c. first then returns Promise.resolve
// Promise.resolve('Promise resolved')
//     .then(data => {
//         console.log("29", data);
//         return Promise.resolve(10);
//     }).then(data => {
//         console.log("32", data);
//     });

// d. first then return a promise to be resolved
// Promise.resolve('Promise resolved')
//     .then(data => {
//         console.log("55",data);
//         return fs.promises.readFile('f1.txt');
//     }).then(data => {
//         console.log("32", data);
//     });

/**************** Promise is rejected
 * // rejected -> something has went wrong
 * Different ways in which you can get a rejected promise
 * 1. Promise.reject
 * 2. Getting a rejected value from a promise based fn
 * 3. throw new error from then & catch
 */

/************************* 1.Promise is rejected **********************/
// Promise.reject("Rejected value");

/************************* 2.Getting a rejected value **********************/
// pr = fs.promises.readFile('f12.txt');
// pr.catch(function (err) {
//     console.log("84: ", err);
//     throw new Error("Error from catch");
// }).catch(err => {
//     console.log("Error got caught.", err);
// })

// a. first then returns a value
Promise.reject('Promise rejected')
    .catch(err => {
        console.log("84", err);
        return 10;
    }).catch(err => {
        console.log("87", err);
    })

// b. first catch doesn't return anything
Promise.reject('Promise rejected')
    .catch(err => {
        console.log("93", err);
    }).catch(err => {
        console.log("95", err);
    });

// c. first catch returns Promise.reject
Promise.reject('Promise rejected')
    .catch(err => {
        console.log("101", err);
        return Promise.reject(10);
    }).catch(err => {
        console.log("104", err);
    });

// d. first catch return a promise to be rejected
Promise.reject('Promise rejected')
    .catch(err => {
        console.log("109", err);
        return fs.promises.readFile('f1.txt');
    }).catch(err => {
        console.log("113", err);
    });