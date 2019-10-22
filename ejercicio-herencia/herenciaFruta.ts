export  abstract class Fruta{
    protected nombre: string;
    protected color: string;
    protected peso: string; 

    constructor(nombre: string, color: string, peso: string){
        this.nombre= nombre;
        this.color = color;
        this.peso= peso;
   }

   public abstract diseñar(): string;
   public abstract decirPertenencia(): string;
}
export interface FrutaDulce{
    clasificar(): string;      
}
export interface FrutaNeutra{
    diseñar(): string;      
}
export interface FrutaAcida{
    medirTamaño(): string;      
}

export class Manzana extends Fruta implements FrutaDulce, FrutaAcida{
    private : string;

    public constructor(nombre: string, color: string, peso: string){
        super(nombre, color, peso);
        this.capacidad=capacidad;
   }

   public diseñar(): string {
    return `
                (
             ((()))
            (((())))
             ((()))`;
   }
   decirMarca(): string{
    return "Red Bull";
    }
    clasificar(): string {
        return "bebida energizante";
    }
    contarContenido(): string {
        return "1L";
    }
    tipificar(): string {
        return "bebida Alcoholica";
    }

}
    
export class Uva extends Fruta implements FrutaDulce, FrutaAcida{

    //private sabor: string;
    public constructor(nombre: string, color: string, peso: string){
        super(nombre, color, peso);
        //this.sabor=sabor;
   }

   public diseñar(): string {
    return `
             ========
            ||      ||
            ||energy||
            ||______||`;
   }
   decirMarca(): string{
    return "Energy";
    }
    clasificar(): string {
        return "bebida vitaminica";
    }

    contarContenido(): string {
        return "1L, 600ml";
    }
}
export class Aguacate extends Fruta implements FrutaNeutra{
    private tipo: string;

    public constructor(nombre: string, color: string, tipo: string, peso: string){
        super(nombre, color, peso);
        this.tipo = tipo;
   }

   public diseñar(): string {
    return `
            ==========
            |__agua__|
             |      |
              |____|`;
   } 
   decirMarca(): string{
    return "Coca Cola";
    }

    clasificar(): string {
        return "Agua dulce";
    }

    contarContenido(): string {
        return "2L, 1L, 600ml";
    }
}

let fruta1 : Fruta = new Manzana("Manzana", "roja","1/2k");
let fruta2 : Fruta = new Uva("Energy", "Anaranjado","Sabor a naranja");
let fruta3 : Fruta = new Aguacate("RedBull", "Negro","600ml");

console.log(fruta1,fruta2, fruta3);
console.log(fruta1.diseñar());
console.log(fruta2.diseñar());
console.log(fruta3.diseñar());