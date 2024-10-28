/****************
 * Environment: Browser
 *      WebApi:
 *          console :
 *          setTimeout, setInterval:
 *          document:
 *          fetch:
 * 
 * Environment: Node.js
 *      NodeAPIs:
 *          console :
 *          setTimeout, setInterval:
 *          fs:
 *          http:
 * 
 * Rule of thumb:
 *      JS: Only gives you logic
 *      Environment: Gives you features
 * 
 * Programmer point of view ->
 *      C++ -> Java [It abstracts away from pointers]
 *      Java -> JS [It abstracts away multithreading]
 * 
 * 1. Every line of code in JS will be executed inside the call-stack.
 * 2. A cb in web Api will not run until and unless the call=stack is empty.
 * 3. CallBack Queue: As soon as the async function is done there cb is immediately pushed on the callback queue.
 * 4. Event Loop: Checks whether the callBack queue & call stack is empty or not.
 * 
 * JS -> Synchronous & single-threaded language
 * Node JS -> is single threaded
 * How it is able to solve asynchronous task? -> asynchronous architecture ->
 * event loop + callback queue + web apis
 ****************/

// let a = true;

// console.log("Before");
// setTimeout(()=>{
//     a = false;
//     console.log("I broke the while loop");
// },1000);
// console.log("After");

// while(a){

// }

// console.log("Before");

// const cb2 = () => {
//     console.log("In cb2");
//     while (true) {

//     }
// }

// const cb1 = () => console.log("hello");

// setTimeout(cb2, 1000);
// setTimeout(cb1, 2000);

// console.log("After");

console.log("Before");

const cb2 = ()=>{

    console.log("setTimeout-2");

    let dateInFuture = Date.now() + 5000;
    while(Date.now()<dateInFuture){
        console.log(Date.now());
    }

    console.log("Done exeuting");

}

const cb1 = ()=>console.log("setTimeout-1");

setTimeout(cb1,1000);
setTimeout(cb2,2000);

console.log("After");