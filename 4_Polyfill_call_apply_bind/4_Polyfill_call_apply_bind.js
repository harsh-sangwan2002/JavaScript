let cap = {
    name:"Steve",
    sayHi:function(avenger1,avenger2,...restOfAvengers){
        console.log("Hey",avenger1,avenger2,...restOfAvengers);
        console.log("Hi from",this.name);
    },
    address:{
        city:"NewYork",
        state:"Manhatten",
        myFn:function(){
            console.log(this);
        }
    }
}

let ironMan = {
    name:"Tony"
}

/**************************** Call Polyfill **************************/

Function.prototype.myCall = function(obj,...params){

    obj.fn = this;
    obj.fn(...params);
    delete obj.fn;
}

cap.sayHi.call(ironMan,"Natasha","Bruce Wayne");
cap.sayHi.myCall(ironMan,"Natasha","Bruce Wayne");


/**************************** Apply Polyfill **************************/
Function.prototype.myApply = function(obj,params){

    obj.fn = this;
    obj.fn(...params);
    delete obj.fn;
}

cap.sayHi.apply(ironMan,["Natasha","Bruce Wayne"]);
cap.sayHi.myApply(ironMan,["Natasha","Bruce Wayne"]);

/**************************** Bind Polyfill **************************/
Function.prototype.myBind = function(obj,...params){

    const futureFn = this;
    
    return function(...args){

        obj.tempFn = futureFn;
        obj.tempFn(...params,...args);
        delete obj.tempFn;
    }

}

const boundFN = cap.sayHi.bind(ironMan,"Hulk","Steve");
boundFN("Antman");

const boundFN2 = cap.sayHi.myBind(ironMan,"Hulk","Steve");
boundFN2("Antman");