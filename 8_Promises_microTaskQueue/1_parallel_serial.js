/***********************
 * Parallel Task -> When there are independent tasks so you can do them simultaneously.
 * Serial Task -> When there are dependent tasks & you have to do them in a serial manner. *********************/

/************ Asynchronous & synchronous functions ***********/

// /************ Synchronous Function ***********/

const fs = require('fs');

// console.log("Before");
// let buffer = fs.readFileSync('f1.txt', 'utf-8');
// // Hexadecimal format of a binary data.
// console.log(buffer);
// console.log(buffer.toString());
// console.log("After");

/************ Asynchronous Function ***********/
// console.log("Before");
// fs.readFile('f1.txt', 'utf-8', (err, data) => {

//     if (err)
//         console.log(err);

//     else
//         console.log(data.toString())
// })
// console.log("After");

/********************
 * Serial Task -> Synchronous function (yes)
 * Question -> serial tasks(dependent) -> write using asynchronous function (yes)
 * Read f1,f2,f3 in that order. **********************/

/********************* Improving nesting ***********************/
let output = "";
fs.readFile('f1.txt','utf-8',f1cb);

function f1cb(err,data){

    if(err){
        console.log(err);
    }

    else{
        output += data.toString()+"\n";
        fs.readFile('f2.txt','utf-8',f2cb);
    }
}

function f2cb(err,data){

    if(err){
        console.log(err);
    }

    else{
        output += data.toString()+"\n";
        fs.readFile('f3.txt','utf-8',f3cb);
    }
}

function f3cb(err,data){

    if(err){
        console.log(err);
    }

    else{
        output += data.toString();
        console.log(output);
    }
}

/************************* 
 * Parallel Task -> async functions (yes)
 * Parallel Task -> using sync functions ?? (no, we cannot)
 *  **************************/

// fs.readFile('f1.txt', (err, data) => {

//     if (err)
//         console.log(err);

//     else
//         console.log(data.toString());
// })

// fs.readFile('f2.txt', (err, data) => {

//     if (err)
//         console.log(err);

//     else
//         console.log(data.toString());
// })

// fs.readFile('f3.txt', (err, data) => {

//     if (err)
//         console.log(err);

//     else
//         console.log(data.toString());
// })