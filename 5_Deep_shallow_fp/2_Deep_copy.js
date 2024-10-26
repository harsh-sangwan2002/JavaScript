let person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "North 1st street",
        city: "San Jose",
        state: "CA",
        country: "USA",

    },
    sayHi: function () {
        console.log("Function said hi!");
    },
    friends: ["peter", "tony"],
    weapons: [
        { toolName: "myloner", origin: "Asgard" },
        { name: "shield", origin: "wakanda" }],
    coordinates: [[2, 3], [7, 11]]
}

function deepCopy(obj) {

    let deepCopiedObj = Array.isArray(obj)?[]:{}

    for (let key in obj) {

        if(typeof key == 'array'){

            // copies at one level
            let newArr = [...obj[key]];

            // nested array
            newArr.forEach(ele=>{
                
                if(typeof ele == 'object')
                    return deepCopiedObj(ele);

                return ele;
            })

            deepCopiedObj[key] = newArr;
        }

        else if (typeof key == 'object') {

            // object
            // recursion
            let clonedObj = deepCopy(obj[key]);
            deepCopiedObj[key] = clonedObj;
        }

        else {
            deepCopiedObj[key] = obj[key];
        }
    }

    return deepCopiedObj;
}

let person2 = deepCopy(person);
person2.coordinates[0][0] = 20; 
console.log(person)