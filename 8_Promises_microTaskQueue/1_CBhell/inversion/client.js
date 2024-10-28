const runMLAlgo = require('./lib.js');

let amount = 100;
let priceOfOne = 20;

console.log("Before");

runMLAlgo(amount,cb);
function cb(){
    amount-=priceOfOne;
    console.log("amount",amount);
}

console.log("After");