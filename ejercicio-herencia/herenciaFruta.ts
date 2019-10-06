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
   public abstract decirMarca(): string;
}
export interface FrutaDulce{
    clasificar(): string;      
}
export interface FrutaNeutra{
    contarContenido(): string;      
}
export interface FrutaAcida{
    tipificar(): string;      
}

export class RedBull extends Bebida implements BebidaEnergizante, BebidaAlcoholica{
    private capacidad: string;

    public constructor(nombre: string, color: string, capacidad: string,peso: string){
        super(nombre, color, peso);
        this.capacidad=capacidad;
   }

   public diseñar(): string {
    return `
            
            (((())))
            (((())))
            (((())))
            (((())))`;
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
    
export class Energy extends Bebida implements BebidaEnergizante{

    private sabor: string;
    public constructor(nombre: string, color: string, sabor: string, peso: string){
        super(nombre, color, peso);
        this.sabor=sabor;
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
export class Agua extends Bebida implements BebidaHidratante{
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

let bebida1 : Fruta = new Agua("Vital", "blanco","Agua mineral");
let bebida2 : Fruta = new Energy("Energy", "Anaranjado","Sabor a naranja");
let bebida3 : Fruta = new RedBull("RedBull", "Negro","600ml");

console.log(bebida1, bebida2, bebida3);
console.log(bebida1.diseñar());
console.log(bebida2.diseñar());
console.log(bebida3.diseñar());