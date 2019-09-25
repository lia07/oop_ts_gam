export class Bar{
    nombre: string; //atributos
    capacidad: number;

    constructor(nom: string, cap: number){
        this.nombre= nom; //sirve para refenciar a los atributos
        this.capacidad=cap;
    }
}
export class BarMan{
    nombre: string;
    apellido: string;
    
    constructor(nomb: string, apellidos: string){
        this.nombre=nomb;
        this.apellido=apellidos;
    }
}
export class Tragos{
    nombre: string;
    color: string;
    cantidad: number;

    constructor(nombr: string, colores:string, cant:number){
        this.nombre=nombr;
        this.color=colores;
        this.cantidad=cant;
    }
}
/** 
 * CONCEPTO: Los atributos son las caracteristicas indibiduales
 * que diferencian un objeto de otro y determinan  su apariencia 
 * estado u otros cualidades. Los atributos se guardan en variables 
 *  denominadasde instancia, y cada objeto particular puede tene
 * valores distintos para estas variables.
 * CONSTRUCTOR:en programacion orientada a objetos (poo), un constructor  
 * es una subrutina cuya mision es inicializar en un objeto
 * de una clase con valores predeterminados
*/
/************************************************/
// let bar1: Bar = new Bar("Nueva Era2", 50);
// let bar2: Bar = new Bar("El patio", 20);
let bar1: Bar = new Bar("Nueva era", 50);
let bar2: Bar = new Bar("El patio", 200);
console.log(bar1);
console.log(bar2);

let barMan1: BarMan = new BarMan("Gladys", "Sarzuri");
let barMan2: BarMan = new BarMan("aaa", "bb");
console.log(barMan1);
console.log(barMan2);

let tragos1: Tragos = new Tragos("name", "verde", 150);
let tragos2: Tragos = new Tragos("name1", "azul", 80);
console.log(tragos1);
console.log(tragos2);