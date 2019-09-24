
interface person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person){
    return "Hello," + person.firstName + "" + person.lastName;
}
let user = { firstName: "gladys", lastName: "User"};
//document.body.textContent = greeter(user);
console.log(greeter(user));

