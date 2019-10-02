export class Operacion{
     numerox: number; //atributos
     numeroy: number;
   // private operacion: Operacion;
     resultado: number;

    constructor(numerox: number, numeroy: number){
        this.numerox= numerox;
        this.numeroy = numeroy;
        //this.resultado = res;
   }
}
export class Suma extends Operacion{
    private suma: number;

    constructor(numerox: number, numeroy: number){
        super(numerox, numeroy);
        this.suma = 0;
   }
   public SumarNumero() {
        this.suma = this.numerox +this.numeroy;
        return suma1;
    }
   }
let suma1: Suma = new Suma(10, 10);
console.log(suma1.SumarNumero());

export class Resta extends Operacion{
    private resta: number;

    constructor(numerox: number, numeroy: number, res: number, resta: number){
        super(numerox, numeroy);
        this.resta = resta;
   }
}
export class Multiplicion extends Operacion{
    private multiplicacion: number;

    constructor(numerox: number, numeroy: number, res: number, mult: number){
        super(numerox, numeroy);
        this.multiplicacion = mult;
   }
}
export class Division extends Operacion{
    private division: number;

    constructor(numerox: number, numeroy: number, res: number, div: number){
        super(numerox, numeroy);
        this.division = div;
   }
}
/** 
 * Prueba
*/
