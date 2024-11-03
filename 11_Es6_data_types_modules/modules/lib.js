var a = 10;
let abc = "hello";
function fn(){
    console.log("Hi! I am fn.");
}

setTimeout(()=>{
    console.log("8",a);
},1000)

let obj = {name:"Steve"};

console.log("GEC",this);

export default obj;
export {a,abc,fn};