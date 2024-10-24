// Question - 1
// function definition
// function fn(param){
//     console.log("Hello World!",param);
// }

// var rVal = fn();
// console.log(rVal); // undefined

// Question - 2
function fn(param){
    console.log("Hello World!",param);

    let rVal = 100;

    // JS will add a semi-colon here
    // Automatic semi-colon insertion takes place
    // * Always return variables in the same line
    return 
    rVal;
}

var rVal = fn();
console.log(rVal); // undefined

/***********************    
 * Object => Collection of key:value pair
 * Where keys can be 'number' or 'string'
 * & value can be any valid JS type.
 * Use case : Used to describe various entities.
 * ***********************/

let cap = {
    "name":"Steve",
    lastName:"Rogers",
    isAvenger:true,
    address:{
        city:"Manhatten",
        state:"New York"
    },
    sayHi:function(){
        console.log("Cap say's hi");
    },
    movies:["First avenger", "Winter Soldier", "Civil War"],
    10:"I am a value"
}

console.log("obj",cap);
console.log(cap[10]);

// Dot operator
console.log("name",cap.name);
console.log("City",cap.address.city);
console.log("2nd movie",cap.movies[1]);

// Square bracket[] operator
console.log("name",cap['name']);
console.log('number',cap[10]);

// Iterating over an object using . operator -> undefined
for(let key in cap){
    console.log("key-> ",key," Value-> ",cap[key]);
}

// Iterating over an object using [] operator -> actual value
for(let key in cap){
    console.log("key-> ",key," Value-> ",cap[key]);
}

/*********************** 
 * JSON -> JavaScript Object Notation -> Represent data in form of object
 * Excel -> Represent data in form of rows and columns
 * XML -> Represent data in form of html tags
 * ***********************/ 