export  abstract class Instrumento{
    protected nombre: string;
    protected color: string; 
    protected tamanio: string;
    protected sonido: string;

    constructor(nombre: string, color: string, tamanio: string, sonido: string ){
        this.nombre= nombre;
        this.color = color;
        this.tamanio = tamanio;
        this.sonido = sonido;
   }

   public abstract nota(): string;
}
export interface InstrumentoViento{
    clasificar(): string;      
}
export interface InstrumentoCuerda{
    contar(): string;      
}
export interface InstrumentoPersecucion{
    tipoMaterial(): string;      
}

export class Guitarra extends Instrumento{
    private cuerdas: number;

    public constructor(nombre: string, color: string, tamanio: string, cuerdas:number,sonido: string ){
        super(nombre, color, tamanio,sonido);
        this.cuerdas=cuerdas;
   }

   public nota(): string {
    return `Traste 0: E (mi)  |  Traste 1: F (fa)  | Traste 3: G (sol)  | Traste 5: A (la)`;
   }
}
export class Piano extends Instrumento{

    private cajaResonancia: number;
    public constructor(nombre: string, color: string, tamanio: string, cajaResonancia: number, sonido: string){
        super(nombre, color, tamanio, sonido);
        this.cajaResonancia=cajaResonancia;
   }

   public nota(): string {
    return `Do mayor: do – mi – sol

    Re menor: re – fa – la
    
    Mi menor: mi – sol – si
    
    Fa Mayor: fa – la – do
    
    Sol mayor: sol – si – re
    
    La Mayor: la – do – mi
    
    Si Mayor: si – re – fa`;
   }
}
export class Timbal extends Instrumento{
    private baqueta: number;

    public constructor(nombre: string, color: string, tamanio: string, sonido: string, baqueta: number){
        super(nombre, color, tamanio, sonido);
        this.baqueta = baqueta;
   }

   public nota(): string {
    return `
            _______________________d_______
            ________________d______________
            _________d_____________________
            ___d___________________________
            ___________________________d___`;
   }
   
}

let instrumento1 : Instrumento = new Timbal("Timbal", "cafe","2m", "graves",2);
let instrumento2 : Instrumento = new Guitarra("guitarra", "cafe","2m", 6, "agudas");
let instrumento3 : Instrumento = new Piano("piano", "negro","4m", 2,"graves");

console.log(instrumento1,instrumento2, instrumento3);
console.log(instrumento1.nota());
console.log(instrumento2.nota());
console.log(instrumento3.nota());


