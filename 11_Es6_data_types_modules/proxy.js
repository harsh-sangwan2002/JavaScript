// server -> proxy -> client
// For the end client this proxy acts as a server but the server is sitting behind the proxy.
let obj = {
    eng:"hello",
    eng2:"hi",
}

// obj.eng = "den";
// console.log(obj.eng);

// Shcema of an object
function proxyFn(obj){

    let handler = {

        get(target,prop){
            return target[prop];
        },
    
        set(target,prop,receiver){
    
            // add a check -> freeze the object
            if(prop in target){
                target[prop] = receiver;
            }
    
            else{
                throw new Error("Cannot add new prop");
            }
        },
    } 
    
    let proxyObj = new Proxy(obj,handler);
    return proxyObj;
}

// Directly pass the object without having any references.
obj = proxyFn({eng:"Hello",eng2:"Hi"});

console.log(obj.eng);
obj.eng2 = "den";
console.log(obj.eng2);