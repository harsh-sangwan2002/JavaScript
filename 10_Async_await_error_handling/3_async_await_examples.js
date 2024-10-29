const fs = require('fs');

console.log("3 Before");
async function fn(){
    try {
        console.log("5 Before in async");
        
        // As soon as await is encountered it moves rest of code to webapi & pauses the
        // execution of async function 
        const data1 = await fs.promises.readFile('f1.txt','utf-8');
        console.log(data1);

        const data2 = await fs.promises.readFile('f2.txt','utf-8');
        console.log(data2);
        console.log("13 B/w in async");

        const data3 = await fs.promises.readFile('f3.txt','utf-8');
        console.log(data3);

        console.log("18 After in async");

        // Always returns a promisified value
        return 10;

    } catch (err) {
        console.log(err);
    }
}
fn();
console.log("25 After")

// console.log("Before");
function normalFn(){
    console.log("Before in normal fn.");
    console.log("b/w");
    console.log("After in normal fn.");
}
// normalFn();
// console.log("After");