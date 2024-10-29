function runMLAlgo(amount, cb) {

    setTimeout(() => {
        cb();
        cb();
        cb();
    }, 1000);
}

function pRunMLAlgo(amount){

    return new Promise((resolve,reject)=>{
        console.log("Running ml algo.");
        console.log("Processing payment");

        setTimeout(()=>{
            console.log("Payment done.");
            resolve();
        },1000)
    })
}

module.exports = {
    runMLAlgo,
    pRunMLAlgo
};