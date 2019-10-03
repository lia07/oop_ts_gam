export abstract class FiguraGeometrica{
    protected nombre: string;
    private posX: number;
    private posY: number;

    public constructor(nombre: string, posx: number, posy: number){
        this.nombre = nombre;
        this.posX = posx;
        this.posY = posy;
    }
    public getPrincipalInf(): string{
        return `Nombre de la Figura: ${this.nombre}.
        Posicion en el eje X: ${this.posX}.
        Posicion en el eje Y: ${this.posY}.`;  // "+THIS.NOMBRE+"+"....
    }

    //public abstract calcularArea(): number;
    public abstract dibujar(): string;
}

export class Triangulo extends FiguraGeometrica{
    private base: number;
    private altura: number;

    public constructor(nombre: string, posX: number, posY: number, ba: number, al: number){
        super(nombre, posX,posY);
        this.base = ba;
        this.altura = al;
    } 


    public dibujar(): string {
        return `
                  *
                 ***
                *****
               ******`;
    }
    public getPrincipalInf(): string{
        return `Soy una Figura rebelde:
        Mi nombre es: ${this.nombre}.
        Mi Altura es: ${this.altura}.
        Mi base es : ${this.base}.`;
    }

}


export class Cuadrado extends FiguraGeometrica{
    private base: number;
    private altura: number;

    public constructor(nom: string, posX: number, posY: number, ba: number, al: number){
        super(nom, posX,posY);
        this.base = ba;
        this.altura = al;
    }
    public dibujar(): string {
        return `
                ________
               |        |
               |        |
               |________|`;
    }

}
export class Circulo extends FiguraGeometrica{
    private radio: number;

    public constructor(nombre: string, posX: number, posY: number, r: number){
        super(nombre, posX,posY);
        this.radio = r;
    }  

    public dibujar(): string {
        return `
               ***
             *     *
             *     *
               *** `;
    }
}

export class Rectangulo{
    private nombre: string;
    private base: number;
    private altura: number;

    public constructor(nom: string, ba: number, al: number){
        this.nombre=nom;
        this.base = ba;
        this.altura = al;
    } 
}

let figuraGeometrica1 : FiguraGeometrica = new Triangulo("t escaleno", 2,2,5,8);// aqui yo defino
let figuraGeometrica2 : FiguraGeometrica = new Circulo("Circulo", 2,2,5);
// let figuraGeometrica3 : FiguraGeometrica = new Cuadrado("Cuadrado", 0,0,20);

console.log(figuraGeometrica1.dibujar());
console.log(figuraGeometrica2.dibujar());
// console.log(figuraGeometrica3.dibujar());
