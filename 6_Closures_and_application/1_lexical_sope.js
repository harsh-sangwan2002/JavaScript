/***********
 * EC: you get variables + outer scope + this + Global Obj
 * When the variable inside your current scope is not present with you
 * then it is referenced from the outer scope.
 * *******************/

/******************************** Question-1  *****************************/
// var varName = 10;

// function fn(){

//     var varName = 20;
//     console.log("13",varName); // 20
// }

// fn();

/******************************** Question-2  *****************************/
/************* Outer scope is determined by the fn defintion -> lexical scope */
// var varName = 10;
// // fn defintion
// function b(){
//     console.log("23",varName); // 10
// }

// function fn(){
//     var varName = 20;
//     // fn invocation
//     b();
//     console.log("30",varName); // 20
// }
// fn();

/******************************** Question-2  *****************************/
function fn() {
    var varName = 20;

    function b() {
        console.log("23", varName); // 20
    }
    b();

    console.log("45", varName); // 20
}
fn();