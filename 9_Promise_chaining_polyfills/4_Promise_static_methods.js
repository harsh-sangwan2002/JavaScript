/************
 * Static methods of promises ->
 * Promise.all
 * Promise.any
 * Promise.race
 * Promise.allsettled
 * Promise.withresolver()
 *************/

/************
 * Promise.all
 *      Input: It takes an array of input as an array
 *      Output: The return promise fulfills when: 
 *          1. If all the promises are resolved then an array of resolves values
 *          is returned.
 *          2. If any of the promise is rejected then Promise.all will also reject the promise
 */
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
const resArr = Promise.all([p0,p1,p2]);
resArr.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

/************
 * Promise.any
 *      Input: It takes an array of input as an array
 *      Output: Returns a single promise: 
 *          1. If any of the input's promise value is fulfilled. Value -> first fulfilled value
 *          2. It rejects when all the input's promises rejects.
 * 
 *      If all promises are rejected -> AggregateError: All promises were rejected
 */
// const resArr = Promise.any([p2, p3]);
// resArr.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

/************
 * Promise.race
 *      Input: Array of promises
 *      Output: Returns a single promise: 
 *      Behaviour: This returned promise settles with the eventual state of first promise that settles
 */
// const resArr = Promise.race([p2, p3]);
// resArr.then(data => {
//     console.log("Executing then", data);
// }).catch(err => {
//     console.log("Executing catch", err);
// })

/************
 * Promise.allSettled
 *      Input: Array of promises
 *      Output: Returns a single promise: 
 *      Behaviour: This returned promise fulfills when all the returned promise are fulfilled with
 *      an array of objects that describe the outcome of each promise.
 */
// const resArr = Promise.allSettled([p0, p1, p2, p3]);
// resArr.then(data => {
//     console.log("Executing then", data);
// }).catch(err => {
//     console.log("Executing catch", err);
// })