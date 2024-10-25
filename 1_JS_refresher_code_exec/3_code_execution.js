// High level overview of code exxecution
// let a = 10;
// function fn(){

//     console.log("I am fn");

//     function inner(){
//         console.log("I am inner");
//     }

//     inner();
// }
// fn();

/****************************
 * Execution Context:
 *      1.It either belongs to the code outside a function.
 *      2.Whenever a function is called.
 * 
 * Execution Context contains
 *      access to it's variables and functions
 *      access to the code you write
 *      ??
 * 
 * Execution context runs inside the call stack
 *      1. Creation phase -> hoisting (memory allocation phase)
 *              1) variables : undefined
 *              2) function : memory allocated
 *      2. Execution phase -> left to right & top to bottom
 *          code inside the execution context is executed.
 * *****************************/

// let a;
// console.log("a: ",a);
// a = 10;
// console.log("a: ",a);

// function real(){
//     console.log("I am real. Always run me.");
// }

// real();
// function real(){
//     console.log("No, I am the real one.");
// }

// function real(){
//     console.log("You both are wasted.");
// }

// console.log("51",a);
// var a = 10;

// function fn(){
//     console.log("55",a);
//     var a = 20;
//     console.log("57",a);

//     function inner(){
//         console.log("60",a);
//         var a;
//         a = 30;
//         console.log("63",a);
//     }

//     inner();
// }
// console.log("68",a);
// fn();
// console.log("70",a);

console.log("72",a);
var a = 10;
console.log("74",a);

function fn(){
    console.log("77",a);
    a++;

    function inner(){
        console.log("81",a);
    }
    inner();
}

console.log("86",a);
fn();
console.log("88",a);