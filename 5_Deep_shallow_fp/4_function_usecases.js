/************************ 
 * fns are first class citizens in js -> fn acts as a object in js
 * object
 *     assign address of an object to another var
 *     pass an object as parameter  
 *     return an object from a function
 * **********************/

/*************************
 * 1. fn has two parts
 * -> fn defintion
 * -> fn invocation
 *************************/

/*******************************1.First Behaviour *****************************/
//Assign address of an object to another var 

let obj = {name:"Steve",lastName:"Rogers"};
let obj2 = obj;

function fn(){
    console.log("I am a function.");
}
let anotherFn = fn;
anotherFn();

// Function expression ->
var fn = function(){
    console.log("I am an fn function.");
}

/*******************************2.Second Behaviour *****************************/
//pass an obj as parameter
function bigger(param){
    console.log(param);
}

bigger(obj);

function smaller(){
    console.log("I am smaller function.");
}
bigger(smaller);