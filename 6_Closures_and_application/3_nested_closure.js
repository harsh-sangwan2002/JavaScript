function getFirstName(firstName){
    console.log("I have got your first name.");
    return function getLastName(lastName){
        console.log("I have got your last name.");
        return function greeter(){
            console.log(`Hi! I am ${firstName} ${lastName}.`);
        }
    }
}

const getLastName = getFirstName("Steve");
const greeterFn = getLastName("Rogers");
greeterFn();