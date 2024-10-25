// var a = 10;
// console.log("line number 2", a); // 10
// function fn() {
//     var a = 20;
//     console.log("line number 5", a); // 20
//     a++;
//     console.log("line number 7", a); // 21
//     if (a) {
//         // a = 30 both lines 9 & 10 are same as var is fn scoped.
//         var a = 30;
//         a++;
//         console.log("line number 11", a); /// 31
//     }
//     console.log("line number 13", a); // 31
// }
// fn();
// console.log("line number 16", a); // 10


/*****
 * Type 1 : fn hositing -> function get the memory
 * Type 2 : variable -> like var -> they are undefined , can also be accessed before declaration
 * Types 3: variable -> like let and const -> they are undefined , can't be before declaration
 * */
/**
 * var  
 * -> scope : var is fn scoped
 * -> redeclaration is allowed in current scope
 * -> in the case var you can access it before declaration 
 * **/

/***
 * let 
 * -> it is a block scoped
 * -> re-declaration is not allowed in current scope
 * -> hositing happens but with temproral dead zone
 * -> cannot acces the value before declaration 
 * 
 * **/
// let a=10;
// let a=20;

// Block -> space b/w two {}

// let a = 10;
// console.log("line number 2", a); // 10
// function fn() {
//    let a = 20;
//     console.log("line number 5", a); // 20
//     a++;
//     console.log("line number 7", a); // 21
//     if (a) {
//         let a = 30;
//         a++;
//         console.log("line number 11", a); // 31
//         if(a){
//             let a=40;
//             console.log("xyz",a); // 40
//         }
//     }
//     console.log("line number 13", a); // 21
// }
// fn();
// console.log("line number 16", a); // 10




// console.log("63",a);
// var a = 10;
// console.log("65",a);

// ReferenceError: Can't access 'a' before initialization
// console.log("val in a", a);
// /***
//  * Temporal Dead Zone : before declaration let varaibales are not accessible 
//  * */
// let a;
// // a++;
// console.log("val in a", a);
// a = 10;
// console.log("val in a", a);



/***** third case ***/
let a = 10;
console.log("line number 2", a); // 10
function fn() {
    console.log("line number 5", a); // ReferenceError
    let a = 20;
    a++;
    console.log("line number 7", a);
    if (a) {
        let a = 30;
        a++;
        console.log("line number 11", a);

    }
    console.log("line number 13", a);
}
fn();
console.log("line number 16", a);