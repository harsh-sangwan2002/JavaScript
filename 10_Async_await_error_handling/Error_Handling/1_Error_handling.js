/**********
 * Inbuilt Errors in  JS:
 * 1. SyntaxError
 * 2. RunTimeError
 *    a.TypeError
 *    b.RangeError
 *    c.ReferenceError
 **********/

/***************** SyntaxError -> 
 *     1. Code don't execute at all. 
 *     2. Language grammar is not correct
 *     3. try-catch will not work in this case.
 * ****************/

// console.log("Hello");
// SyntaxError: Unexpected identifier 'a'
// le a;

// SyntaxError: Identifier 'a' has already been declared
// console.log("Hello");
// console.log("a");
// let a = 10;
// {
//     var a  = 20;
//     console.log("a",a);
// }

/********* RunTimeError -> Are the error that occurs during runtime. */
// ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a = 20;

// ReferenceError: fn is not defined
// fn();

/********* RangeError: Maximum call stack size exceeded overflow */
function foo(){
    foo();
}
// foo();

// RangeError: Invalid array length
let a = [];
// a.length = 100**100;
console.log(a);

// TypeError: num.toUpperCase is not a function
let num = 100;
// console.log(num.toUpperCase());