export  abstract class Bebida{
    protected nombre: string;
    protected color: string; 

    constructor(nombre: string, color: string){
        this.nombre = nombre;
        this.color = color;
   }
   public abstract diseñar(): string;
   public abstract decirMarca(): string;
}
export interface BebidaEnergizante{
    clasificar(): string;      
}
export interface BebidaHidratante{
    contarContenido(): string;      
}
export interface BebidaAlcoholica{
    tipificar(): string;      
}
/** 
 * para adultos
*/
 export class RedBull extends Bebida implements BebidaEnergizante, BebidaAlcoholica{
    private capacidad: string;

    public constructor(nombre: string, color: string, capacidad: string){
        super(nombre, color);
        this.capacidad=capacidad;
   }
   public informacionPrincipal(): string{
    return " soy bebida reenergizante";
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
   /**
    * para niños, adultos para todos
    */ 
export class Energy extends Bebida implements BebidaEnergizante{

    private sabor: string;
    public constructor(nombre: string, color: string, sabor: string){
        super(nombre, color);
        this.sabor=sabor;
   }
   public informacionPrincipal(): string{
       return " soy bebida energizante y vitaminico";
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

/**
 * Para todo edad
 */
export class Agua extends Bebida implements BebidaHidratante{
    private tipo: string;

    public constructor(nombre: string, color: string, tipo: string){
        super(nombre, color);
        this.tipo = tipo;
   }
   public informacionPrincipal(): string{
    return " soy bebida Hidratante";
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
export class Tienda{
     venderBebida(bebida: Bebida): string{
        return `bebida para todo edad
                bebida para niños
                bebida para adultos`;
    }     
}
  let agua:Bebida=new Agua("","","");
  let redbull: Bebida=new RedBull("","","");
  let energy:Bebida=new Energy("","","");

 let listaBebida: Bebida[]=[];
 listaBebida.push(agua);
//  listaBebida.push(redBull);
 listaBebida.push(energy);
  for(const v of listaBebida){
      console.log(v.decirMarca());
  }

let bebida1 : Bebida = new Agua("Vital", "blanco","Agua mineral");
let bebida2 : Bebida = new Energy("Energy", "Anaranjado","Sabor a naranja");
let bebida3 : Bebida = new RedBull("RedBull", "Negro","600ml");

console.log(bebida1, bebida2, bebida3);
console.log(bebida1.diseñar(), bebida1.decirMarca());
console.log(bebida2.diseñar(), bebida2.decirMarca());
console.log(bebida3.diseñar(), bebida3.decirMarca());
