let arr = [1,2,3,4];
arr.push("hello");

console.log(arr);

/*************************  
 * When you want a feature to be added on a data-type
 *  - Add it into the Parent's prototype 
 * 
 * Polyfills (JS logic) - Implemnetation of a feature which may or may not be present in older browsers.
 * ****************************/

Array.prototype.calcSum = function(){

    let sum = 0;

    for(let i=0; i<this.length; i++)
        sum+=this[i];

    return sum;
}

const res = arr.calcSum();
console.log(res);