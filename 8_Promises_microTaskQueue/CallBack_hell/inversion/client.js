const { runMLAlgo, pRunMLAlgo } = require('./lib.js');

let amount = 100;
let priceOfOne = 20;

console.log("Before");

// runMLAlgo(amount,cb);
const promise = pRunMLAlgo(amount);
function cb() {
    amount -= priceOfOne;
    console.log("amount", amount);
}

promise.then(data => {
    cb();
    console.log("Promise resolved.");
}).catch(err => {
    console.log(err);
})

console.log("After");