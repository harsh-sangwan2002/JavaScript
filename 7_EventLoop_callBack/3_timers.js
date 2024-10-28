// setTimeout -> executes after specified period of time.
// console.log("Before");
// function fn() {
//     console.log("I am being called.");
// }
// setTimeout(fn, 3000);
// console.log("After");

// setInterval -> executes repeatedly after specified period of time.
// clearInterval -> breaks the interval

// console.log("Before");

// function cb() {
//     console.log("I am cb.");
// }

// let timerId = setInterval(cb, 1000);
// function stopperFn() {
//     clearInterval(timerId);
// }

// setTimeout(stopperFn, 5000);
// console.log("After");

/**************************** Polyfill of setInterval using setTimeout */
console.log("Before");

function customSetInterval(callback, delay) {
    
    let intervalId = { id: null };

    function repeat() {
        intervalId.id = setTimeout(() => {
            callback();
            repeat();
        }, delay);
    }

    repeat();

    return intervalId;
}

function customClearInterval(intervalId) {
    clearTimeout(intervalId.id);
}

let timerId = customSetInterval(() => {
    console.log("Repeated log.");
}, 1000);

setTimeout(() => {
    myClearInterval(timerId);
    console.log("Stopping interval.");
}, 5000);

console.log("After");