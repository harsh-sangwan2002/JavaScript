const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('bar');
    }, 2000)
})

Promise.myAll = function (arrayOfPromises) {

    return new Promise((resolve,reject)=>{

        let resolvedPromisesValueArr = [];
        let pendingPromises = arrayOfPromises.length;

        if(pendingPromises==0)
            resolve(resolvedPromisesValueArr);
        
        arrayOfPromises.forEach(async (promise)=>{

            try {
                
                const value = await promise;
                resolvedPromisesValueArr.push(value);
                pendingPromises--;

                if(pendingPromises==0)
                    resolve(resolvedPromisesValueArr);

            } catch (err) {
                reject(err);
            }
        })
    })
}

Promise.myAll([p0, p1, p2]).then(dataArr => {
    console.log(dataArr)
}).catch(err => {
    console.log("Error is: ", err);
})