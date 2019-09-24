let disabled:boolean = true; //true or false
console.log(disabled);
let  firstName: string = "gladys";
console.log(firstName);

//baccting por que sus comillas son al otro lado
let greeting:string = `hello  ${firstName}`;
console.log(greeting);

let  list:Array<number> = [3,7];
console.log(list);

let nombre = "Gladys Sarzuri";
function ejemplo(){
    let x: number = 100;
    for(let m=0; m<10;m++){
        var y=200;
        console.log("variable x dentro del for", x);
        console.log("variable x dentro del for", y);
    }
    console.log("variable x fuera del for", x);
    console.log("variable y fuera del for", y);
}
ejemplo()