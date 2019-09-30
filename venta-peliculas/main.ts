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
    private precio: number; //atributos

    constructor(pr: number){
        this.precio = pr;
   }
}
export class Cd extends Disco{
    private curso: Curso; 
    constructor(cu: Curso ){
        this.curso = cu;
   }
}
export class Dvd extends Disco{
    private curso: Curso; //atributos
    private estudiante: Estudiante;
    private fecha: string;

    constructor(cu: Curso){
        this.curso = cu;
        this.estudiante = est; 
        this.fecha= fe;
   }
}
export class Blu.ray extends Disco{
    private curso: Curso; //atributos
    private estudiante: Estudiante;
    private fecha: string;

    constructor(cu: Curso, est: Estudiante, fe: string){
        this.curso = cu;
        this.estudiante = est; 
        this.fecha= fe;
   }
}
export class Cliente{
    private curso: Curso; //atributos
    private estudiante: Estudiante;
    private fecha: string;

    constructor(cu: Curso, est: Estudiante, fe: string){
        this.curso = cu;
        this.estudiante = est; 
        this.fecha= fe;
   }
}