/************************** use case of call, apply, bind **************************/

let cap = {
    name:"Steve",
    sayHi:function(avenger1,avenger2,...collectedParams){
        console.log(avenger1,avenger2);
        console.log("Hi from ",this.name);
    }
}

let ironMan = {
    name:"Tony"
}
cap.sayHi("Peter","Bruce");

/********* method -> call : borrow a method ***************/
cap.sayHi.call(ironMan,"Black Panther","Antman");

/********* method -> apply : borrow a method and can pass n no of parameters ***************/
cap.sayHi.apply(ironMan,['Bruce Wayne','Queen']);

/*************************  
 * Rest -> When you are collecting the parameters, is used as a function parameter
 * Spread -> When you are spreading an array/obj in individual elements
*************************/

/********* method -> bind : bind a function to a this ***************/
let copiedMethod = cap.sayHi.bind(ironMan);
copiedMethod("Peter Parker","Deadpool");