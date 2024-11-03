/************************* Rules of finally ***********************/

/******** 1. finally don't take any parameters -> resolve/reject doesn;t matter */
// Promise.resolve(1).finally((data) => {
//     console.log(data); // undefined
// })

/********* 2. If finally returns(reject/throw error) that will be rejected
 * then finally the error and parent's reject/resolve is ignored.
 */
// Promise.reject(1).finally(data => {
//     console.log(data); // undefined
//     throw new Error("I am an error.");
// }).catch(err => {
//     console.log(err.message); // I am an error
// })

// Promise.resolve(1).finally(data=>{
//     console.log(data); // undefined
//     throw new Error("I am an error.");
// }).catch(err=>{
//     console.log(err.message); // I am an error
// })

/********* 3. If finally returns a value/promise then it's return value will
 * be ignored and parent's value will be forwarded.
 **********/
// Promise.resolve(1).finally((data) => {
//     console.log(data); // undefined
//     return Promise.resolve(3000);
// }).then(data => {
//     console.log(data); // 1
// })

// Promise.reject("some error")
//     .finally((data) => {
//         console.log(data); // undefined
//         return "2";
//     }).catch(err => {
//         console.log(err); // some error
//     })