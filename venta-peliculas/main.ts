/**Resuelva el siguiente problema usando programación Orientada objetos 
 * y herencia: Se necesita implementar un sistema para la venta de películas 
 * en formatos cd, dvd, blu-ray. Donde debe estar involucrado al cliente. Se debe
 *  guardar cds,  dvds, el monto total percibido por la venta de dvds. Se debe  poder
 *  calcular  el  monto total percibido por la venta de cds. Se debe poder calcular  el 
 * monto total percibido por la venta  de blu-rays.  Se debe poder calcular el monto total 
 *  percibido por la venta de cds, dvds y blu-ray. Los 3 tipos de discos
 *  deben guardar en una lista.
 */
export class Disco{
    private nombre: string; //atributos
    private precio: number;
    private formato: string;

    constructor(nom: string, pr: number, fr: string ){
        this.nombre= nom;
        this.precio = pr;
        this.formato =fr;
   }
}
export class Cd extends Disco{

    constructor(nom: string, pr: number, fr: string ){
        super(nom, pr, fr);
   }
}
export class Dvd extends Disco{

    constructor(nom: string, pr: number, fr: string){
        super(nom, pr, fr);
   }
}
export class Bluray extends Disco{

    constructor(nom: string, pr: number, fr: string){
        super(nom, pr, fr);
   }
}
/*************/
export class Cliente{
    private nombre: string; //atributos
    private apellido: string;
    private edad: number;

    constructor(nom: string, ap: string, ed: number){
        this.nombre = nom;
        this.apellido = ap; 
        this.edad = ed;
   }
}

export class TiendaDisco{
    private disco: Disco[];//atributos
   // private cantidad : number;  
    
    constructor(dis: Disco[]){
        this.disco = dis;

   }
   public setAgregarDisco(disco1: Disco): void{
    this.disco.push(disco1);
   }
}
export class VentaDisco{
    private tipo: Disco[]; //atributos
    private fecha: string;
    
    constructor(fe: string){
        this.fecha =fe;
   }
   public setVentaDisco(cantidad: number, dis: Disco){
    this.disco = ;
   }
}
/**
 * Prueba
 */
let disco1: Disco = new Disco("mipelicula",25, "ext2");
let dir: Disco[] = [disco1];