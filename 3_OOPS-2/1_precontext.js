let cap = {
    // key -> property
    name:"Steve",
    lastName:"Rogers",
    // function -> method
    sayHi:function(){
        console.log("Hi from Harsh!");
    }
}

function sayHi(){
    console.log("sayHi said hi!");
}

// function call/invocation
sayHi();

// method call/invocation
cap.sayHi();

/*****************  let goes into script scope **********************/
// let a = 100;
/*****************  let goes into window object scope **************/
var b = 200;

/*****************  function & addresses **********************/
function fn2(){
    console.log("I am fn2");
    return "return from fn2";
}

// you are accessing the reference of fn
console.log("32",fn2);

// you are accessing the return value of fn
console.log("33",fn2());

let fn3 = fn2;
console.log("39",fn3());

/**********************************************************************/
// 1. variable goes into the memory on the run time
// 2. value of the variable depends upon it's EC
let a = 10;
console.log("45",a);
function fn(){
    let a = 100;
    console.log("48",a);
}
fn();
console.log("51",a);