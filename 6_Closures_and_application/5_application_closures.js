/******* Application of closures - 
 * 1. Creating private variables
 * 2. Memoize a function
 * 3. Infinite currying
 ****************************/

// 1. Creating private variable
function createEvenStack() {

    const items = [];
    return {
        push: function (val) {
            if (val % 2 === 0) {
                items.push(val);
            }

            else {
                console.log("Please input an even value.");
            }
        },
        pop: function () {
            items.pop();
        },
        print: function () {
            console.log(items);
        }
    }
}

const st = createEvenStack();

st.push(2);
st.push(4);
st.push(6);

// st.print();

st.pop();

// st.print();

// But we have direct access to items stack
// console.log(st.items);

/************************ 2. Memoization 
 * There are some operations which are repititive & takes a bit of time
 * with the same set of inputs. *********************/
function calc(n){

    let sum = 0;
    for(let i=0; i<n; i++)
        sum+=n;

    return sum;
}

// console.time();
// console.log(calc(10000000));
// console.timeEnd();

// console.log('``````````````````````````');

// console.time();
// console.log(calc(10000000));
// console.timeEnd();

function optimizedCalc(fn){

    const cache = {};
    return function(input){

        if(cache[input])
            return cache[input];

        const result = fn(input);
        cache[input] = result;
    }
}

// console.time();
// const efficientFn = optimizedCalc(calc);
// console.log(efficientFn(10000000));
// console.timeEnd();
// console.log('``````````````````````````');

// console.time();
// console.log(efficientFn(10000000));
// console.timeEnd();

/****************************** 3.Infinite Currying (Version-1) ***********************/

function counter(a){

    let count = 0;
    count++;

    if(a==0){
        console.log(count);
    }

    else{

        return function inner(b){

            count++;

            if(b===0){
                console.log(count);
                return;
            }

            else 
            return inner;
        }
    }
}

counter(0)
counter()(0)
counter()()(0)
// counter(0) -> 1
// counter()(0) -> 2
// counter()()(0) -> 3

/****************************** 4.Infinite Currying (Version-2) ***********************/
function sum(a){

    if(!a)
        return 0;

    return function inner(b){

        if(!b)
            return a;

        a += b;
        return inner;
    }
}

console.log(sum(1)());
console.log(sum(1)(2)());
console.log(sum(1)(2)(3)());
// sum(1) -> 1
// sum(1)(2) -> 3
// sum(1)(2)(3) -> 6