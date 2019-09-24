var disabled = true; //true or false
console.log(disabled);
var firstName = "gladys";
console.log(firstName);
//baccting por que sus comillas son al otro lado
var greeting = "hello  " + firstName;
console.log(greeting);
var list = [3, 7];
console.log(list);
var nombre = "Gladys Sarzuri";
function ejemplo() {
    var x = 100;
    for (var m = 0; m < 10; m++) {
        var y = 200;
        console.log("variable x dentro del for", x);
        console.log("variable x dentro del for", y);
    }
    console.log("variable x fuera del for", x);
    console.log("variable y fuera del for", y);
}
ejemplo();
