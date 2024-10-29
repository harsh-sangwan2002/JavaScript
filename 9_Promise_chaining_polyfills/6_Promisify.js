const fs = require('fs');
const util = require('util');
const promisify = util.promisify;

const promiseReadFile = promisify(fs.readFile);
promiseReadFile('f1.txt').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})