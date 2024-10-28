function runMLAlgo(amount, cb) {

    setTimeout(() => {
        cb();
        cb();
        cb();
    }, 1000);
}

module.exports = runMLAlgo;