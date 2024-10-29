const fs = require('fs');

// Nesting of promises ->
const promise = fs.promises.readFile('f1.txt', 'utf-8');
promise.then(data => {
    console.log(data);
    const p2 = fs.promises.readFile('f2.txt', 'utf-8');
    p2.then(data => {
        console.log(data);
        const p3 = fs.promises.readFile('f3.txt', 'utf-8');
        p3.then(data => {
            console.log(data);
        })
    })
}).catch(err => {
    console.log(err);
})

async function fn() {

    try {
        const data = await promise;
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
fn();

console.log("Before");