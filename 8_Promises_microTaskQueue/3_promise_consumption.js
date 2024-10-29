const fs = require('fs');

const promise = fs.promises.readFile('f1.txt');

// then -> It is an event-listener on promise -> fn when the promise is resolved
promise.then(data=>{
    console.log(data.toString());
})

// catch -> It is also an event-listener on promise -> fn when the promise is rejected
promise.catch(err=>{
    console.log(err)
})