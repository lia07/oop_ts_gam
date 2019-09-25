export class Bar{
   private nombre: string; //atributos
   private capacidad: number;

    constructor(nom: string, cap: number){
        this.nombre= nom; //sirve para refenciar a los atributos
        this.capacidad=cap;
    }

    public setNombre(nom: string):void{
        this.nombre = nom;
    }
    public getNombre(): string{
       return  this.nombre;
    }
    public setCapacidad(cap: number):void{
        this.capacidad = cap;
    }
    public getCapacidad(): number{
        return this.capacidad;
    }
}
export class BarMan{
   private nombre: string;
   private apellido: string;
    
    constructor(nomb: string, apellidos: string){
        this.nombre=nomb;
        this.apellido=apellidos;
    }
    public setNombre(nomb: string):void{
        this.nombre = nomb;
    }
    public getNombre(): string{
        return this.nombre;
    }
    public setApellido(apellidos: string):void{
        this.apellido = apellidos;
    }
    public getApellido(): string{
        return this.apellido;
    }
}
export class Tragos{
    private nombre: string;
    private color: string;
    private cantidad: number;

    constructor(nombr: string, colores:string, cant:number){
        this.nombre=nombr;
        this.color=colores;
        this.cantidad=cant;
    }
    public setNombre(nombr: string):void{
        this.nombre = nombr;
    }
    public getNombre(): string{
        return this.nombre;
    }

    public setColor(colores: string): void{
        this.color = colores;
    }
    public getColor(): string{
        return this.color;
    }
    public setCantidad(cant: number): void{
        this.cantidad = cant;
    }
    public getCantidad(): number{
        return this.cantidad;
    }
}

let bar1: Bar = new Bar("Nueva era", 50);
let bar2: Bar = new Bar("El patio", 200); 
bar1.setNombre("el pueblito");
bar1.setCapacidad(85);
console.log(bar1);
console.log(bar2);
//console.log(bar1.nombre); forma incorrecta de pedir un atributo
//bar1.nombre = "pueblito"; forma incorrecta actualizar un atributo
console.log(bar1.getNombre());
console.log(bar1.getCapacidad());
let barMan1: BarMan = new BarMan("Gladys", "Sarzuri");
let barMan2: BarMan = new BarMan("aaa", "bb");
console.log(barMan1);
console.log(barMan2);

let tragos1: Tragos = new Tragos("name", "verde", 150);
let tragos2: Tragos = new Tragos("name1", "azul", 80);
console.log(tragos1);
console.log(tragos2);
bar1.setCapacidad(40);

