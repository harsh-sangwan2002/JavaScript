/********
 * What does it do? -> It promisifies simple asynchronous cb based functions
 * Where does it come from? -> Node.js environment
 * What are the few assumption we make using promisify?
 *********/
const fs = require('fs');
const { promisify } = require('util');

// These are asynchronous cb based functions
// fs.readFile();
// fs.writeFile();
// fs.copyFile();

// const promisifiedFn = promisify(fs.readFile);

// promisifiedFn('f1.txt').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

/***** Async Function ->
*   1. takes all args initially 
*   2. last arg will be error first cb.
******/

function OwnPromisify(fn) {

    return function (...args) {

        return new Promise((resolve, reject) => {

            fn(...args, (err, data) => {

                if (err)
                    reject(err);

                else
                    resolve(data);
            })
        })
    }
}

const promisifiedFn = OwnPromisify(fs.readFile);

promisifiedFn('f1.txt').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})