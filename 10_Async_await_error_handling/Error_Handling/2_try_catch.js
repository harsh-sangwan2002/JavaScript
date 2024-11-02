// console.log("Before");

try {
    console.log(a);
    let a = 10;

    // console.log("Before");
} catch (err) {
    // console.log("Error",err.message);
    // console.log("Error",err.name);
}

// console.log("After");

console.log("Before");

// Handling asynchronous try-catch
setTimeout(()=>{
    try {
        console.log("setTimeout is executed.");
        console.log(a)
    } catch (err) {
        console.log(err.message);
        console.log(err.name);
    }
},1000);

console.log("After try-catch");