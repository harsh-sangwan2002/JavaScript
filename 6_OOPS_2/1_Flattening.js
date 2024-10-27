let obj = {
    newObj:{
        obj2:{
            obj3:{
                obj4:{
                    one:1,
                }
            }
        },
        obj5:{
            two:2
        }
    }
}

function flattenObj(obj){

    let flatten = {};

    for(let key in obj){

        if(typeof obj[key]=='object'){

            let innerObj = obj[key];
            let flattenInnerObj = flattenObj(innerObj);

            for(let innerKey in flattenInnerObj)
                flatten[key+"."+innerKey] = flattenInnerObj[innerKey];
        }

        else{
            flatten[key] = obj[key];
        }
    }
    return flatten;
}

console.log(flattenObj(obj));