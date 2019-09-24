var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }
    return Student;
}());
function greeter(Person) {
    return "Hola," + Person.firstName + "" + Person.lastName;
}
var user = new Student("Jane", "M.", "User");
