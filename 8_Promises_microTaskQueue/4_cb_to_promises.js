const fs = require('fs');

function promisifiedReadFile() {

    return new Promise((resolve, reject) => {

        fs.readFile('f12.txt', 'utf-8', (err, data) => {

            // resolve fn
            // state -> fulfilled -> resolved
            // value -> whatever you pass into

            // reject fn
            // state -> fulfilled -> rejected
            // value -> whatever you pass into
            if (err)
                reject(err);

            else
                resolve(data);
        })
    })
}

console.log("Before");

const pr = promisifiedReadFile();

pr.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
    console.log("Hi");
})

console.log("After");

/****** 
 * Why promises are better than cb?
 * -> Promises can only be rejected/resolves only once in their lifetime.
 * -> All the cbs of promises goes in mocirTask Queue which has a higher priority then the normal queue.
*******/