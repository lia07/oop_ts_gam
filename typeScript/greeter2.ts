class Student {
    fullName: string;
    constructor(public firstName: string, middleInitial: string, public lastName: string){
        this.fullName = firstName+ "" + middleInitial + ""+ lastName;

    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(Person: Person){
    return "Hola," + Person.firstName+ ""+ Person.lastName;
}
let user = new Student("Jane", "M.","User");