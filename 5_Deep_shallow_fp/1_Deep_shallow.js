/****************************  
 * Ways to copy the data
 * 0. Assignment
 * 1. Shallow copy
 * 2. Deep copy
 *  *******************************/

/******************* Primitives -> There values are copied *****************/
let a = 10;
let b = a;
b = 30;
console.log(a);

/******************* Non-Primitives -> There addresses are copied *****************/
let arr = [1,2,3,4];
let arr2 = arr;
arr2[2] = 30;
console.log(arr);

/******************* Deep Copy -> Creating a copy such that both types are independent of each other i.e. one's change shouldn't effect the other *****************/
/******************* Shallow Copy -> Creating a copy such that both types are dependent on ********************************/
let person = {
    firstName:"John",
    lastName:"Doe",
    address:{
        street:"North 1st street",
        city:"San Jose",
        state:"CA",
        country:"USA"
    }
}

/******************* shallow copy
 * 1. spread operator
 *******************************/
let copiedObj = {...person};
console.log(person);
copiedObj.address.state = "Los Angeles";
console.log(person);

/********************************* 2. Object.assign ************************/
let copiedObj2 = Object.assign({},person);
console.log(person);
copiedObj.address.state = "Utah";
console.log(person);

/******************* deep copy
 * 1. JSON.stringify and JSON.parse
 *******************************/

// obj -> string then string -> obj. 
// Very slow performance also it doesn;t support any in built-functions.
let strObj = JSON.stringify(person);
console.log(strObj);
console.log(typeof strObj);

let newObj = JSON.parse(strObj);
console.log(newObj);
console.log(typeof newObj);