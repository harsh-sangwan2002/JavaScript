/* 1. JavaScript -> Dynamic typed language, high level language, just-in-time compiled lanuage.
V8 engine executes the language - written inside C++ & JS

-> Dynamic Typed Language -> JS, Ruby, Python
var a -> just a normal variable

-> Statically Typed Language -> C, C++, C#, Java
explicitly tell the type of variable
int a -> data-type is int
*/

// By default JS gives you undefined.
var a;
console.log("Val in a: ",a);

/********************************  2. Data Types  
 * 1. Primitive data-types -
 *    a. old primitives : number, string, boolean, null, undefined
 *    b. new primitives: BigInt, Symbol
 * 2. Non-primitive data-types -
 *    a. old non-primitives: Array, Object, Function
 *    b. new primitives: Map, Set, ,WeakMap, WeakSet 
 * ********************************/

/********************************* 3.Numbers *********************************/
// Behaves like a mathematical number.
// It is stored as a 64-bit floating point number.
console.log("ans", 5/2);

/********************************* 4.Strings
 * 1. no characters -> string has all the methods.
 * 2. '' & "" don't have any difference.
 * 3. '' & "" don't support multi-line strings
 * 4. Template string is another way of creating string -> 
 * Inspiration for react & enables user to write multi-line strings.
 * *********************************/
var age = 27;
// 1st way 
var str = 'I am '+age+' years old.';
console.log(str);

// 2nd way -> Template string
str = `I am ${age} years old.`
console.log(str);

/********************************* null Vs undefined *********************************/
// 1. undefined -> default value given to you by JS lanaguage.
// 2. null -> Has to be set on your own. 
var varName;
console.log(varName);

varName = null;
console.log(varName);

/********************************* boolean -> true,false *********************************/
var flag = true;
console.log(flag);

/********************************* typeof *********************************/
var a;
console.log("61",typeof a); // undefined
a = 10;
console.log("63",typeof a); // number
a = true;
console.log("65",typeof a); // boolean 

// It is a bug in JS
a = null;
console.log("67",typeof a); // object
a = "I am a string";
console.log("69",typeof a); // string

// This is not a bug.
let arr = [10,20,30];
console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true

/********************************* BigInt *********************************/