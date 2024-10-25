// let fruits = "apple";
// console.log(fruits); // apple

// {
//     console.log(fruits);  // ReferenceError
//     let fruits; 
//     console.log(fruits);
//     fruits = "orange";
//     {
//         console.log(fruits)
//     }
//     console.log(fruits);
// }

// console.log(fruits);


// let fruits = "apple";
// console.log("21", fruits);  // apple
// {
//     console.log("25", fruits); // apple
//     fruits = "orange";
//     {
//         console.log("fruits name ", fruits) // orange
//     }
//     console.log(fruits);// orange
// }
// console.log(fruits); // orange


// shadowing : in the current if you have a vriable then that variable will shadow the outer variable
// in that scope if the names are same 
//  legal shadowing  -> 
// let fruits = "apple";
// console.log("21", fruits);  // apple
// {
//     let fruits;
//     console.log("25", fruits); // undefined
//     fruits = "orange";
//     {
//         let fruits
//         console.log("fruits name ", fruits) // undefined
//     }
//     console.log(fruits);// orange
// }
// console.log(fruits); // apple


// var fruits = "apple";
// console.log("21", fruits);  // apple
// {
//     var fruits;
//     console.log("25", fruits); // apple
//     fruits = "orange";
//     {
//         var fruits
//         console.log("fruits name ", fruits) // orange
//     }
//     console.log(fruits);// orange
// }
// console.log(fruits); // orange


var a = 10;
console.log("a 67",a); // 10
function fn() {
    var a
    console.log("69", a); // undefined
    function fn2() {
        var a=40;
        console.log("a", a); // 40
    }
    fn2();
    console.log("74", a); // undefined
}
fn();
console.log("a 79",a); // 10


//  illegal shadowing -> wrt to var that living through whole GEC -> tring to wrap it inside a block scope

// let fruits = "apple";
// console.log("21",fruits); // apple
// { 
//     let fruits;
//     fruits = "orange";
//     console.log("25",fruits); // orange
//     {
//         var fruits;
//         console.log("28",fruits); // SyntaxError -> Redeclaration is not allowed
//     }
//     console.log(fruits);
// }
// console.log(fruits);