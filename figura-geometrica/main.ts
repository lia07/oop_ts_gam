export class FiguraGeometrica{
    private nombre: string;
    private posX: number;
    private posY: number;

    public constructor(nombre: string, posx: number, posy: number){
        this.nombre = nombre;
        this.posX = posx;
        this.posY = posy;
    }
}
export class Triangulo extends FiguraGeometrica{
    private base: number;
    private altura: number;

    public constructor(nombre: string, posX: number, posY: number, ba: number, al: number){
        super(nombre, posX,posY);
        this.base = ba;
        this.altura = al;
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
}
export class Circulo extends FiguraGeometrica{
    private radio: number;

    public constructor(nombre: string, posX: number, posY: number, r: number){
        super(nombre, posX,posY);
        this.radio = r;
    }  
}

export class Rectangulo{
    private base: number;
    private altura: number;

    public constructor(ba: number, al: number){
        this.base = ba;
        this.altura = al;
    } 
}
let triangulo1: Triangulo = new Triangulo("Equilatero", 10, 15, 5, 6);
console.log(triangulo1);

let figuraGeometrica1: FiguraGeometrica= new Circulo("circulo", 11,12,10);
var resultado:boolean = figuraGeometrica1 instanceof Circulo;
console.log(resultado);

let figuraGeometrica2: FiguraGeometrica= new Cuadrado("cuadrado", 1,2,3,4);
var resultado:boolean = figuraGeometrica2 instanceof Triangulo;
console.log(resultado);