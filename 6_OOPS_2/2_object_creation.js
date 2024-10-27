/******************** Ways to create objects in JS **********************/

// 1. Object Literal
// You get -> 1. properties and methods, 2. You get your parent->prototype
let obj = {
    name:"Steve",
    lastName:"Rogers",
    address:{
        city:"Manhatten",
        state:"New York"
    },
    sayHi:function(){
        console.log("Function said hi.");
    }
}

// console.log(obj);
// obj.sayHi();

/******************** Inheritance of internal type ->
 * A) Non-primitives have their own parent
 *      1. Every array has a parent Array
 *      2. Every function has a parent Function
 *      3. Every object has a parent Object
 * 
 * B) Primitives don't have therir immediate parent
 *      1. If a primitive is created using call -> Number, Boolean, String
 *      2. Then how string literal is able to access the charAt() property? 
 *      Autoboxing - Primitives are typecase into children of their parent class.
 * **********************/


function fn(){
    console.log("Hi!");
}
// fn();
// console.log(fn.prototype);

let str = "hello";
// console.log(str);
// console.log(str.prototype);
// console.log(str.__proto__);

let str2 = new String("hello");
// console.log(str2);
// console.log(str2.prototype);
// console.log(str2.__proto__);

let arr = [1,2,3,4];
console.log(arr);
// arr -> Array -> Object -> null
// console.log(arr.__proto__.__proto__.__proto__);

/*********************** 2. Using Object.create 
 * Object will not inherit the property from it's parent **********************/ 
let newObj = Object.create(null);
newObj.prop = "First prop";
console.log(newObj);

let obj2 = Object.create(newObj);
obj.name = "cap";
console.log(obj2);

let obj3 = Object.create(obj2);
obj3.lastName = "america";
console.log(obj3.prop);

for(let key in obj3){

    const res = Object.prototype.hasOwnProperty.call(obj3,key);
    if(res)
        console.log(key,obj[key]);
}