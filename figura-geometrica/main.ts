export class FiguraGeometrica{
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
        Posicion en el eje X: ${this.PosX}.
        Posicion en el eje Y: ${this.PosY}.`;  // "+THIS.NOMBRE+"+"....
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
    public getPrincipalInf(): string{
        return `Soy una Figura rebelde:
        Mi nombre es: ${this.nombre}.
        Mi Altura es: ${this.altura}.
        Mi base es : ${this.base}.`;
    }
}

export class TrianguloEscaleno extends Triangulo{
    private frase: string;
    public constructor(nombre: string, posx: number, posy: number, frase:string){
        super(nombre, posx, posy);
        this.frase= frase;
    }
    public getPrincipalInf(): string{
        return `Soy anarquista:
        My nombre es: No es tu problema.
        My frase es: ${this.frase}.`;
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
    private nombre: string;
    private base: number;
    private altura: number;

    public constructor(nom: string, ba: number, al: number){
        this.nombre=nom;
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
var resultado2:boolean = figuraGeometrica2 instanceof Triangulo;
console.log(resultado2);

let figura: Rectangulo = new Rectangulo("rectanggulo", 3,4);
var resultado3:boolean = figura instanceof FiguraGeometrica;
console.log(resultado3);


let figuraGeometrica4: FiguraGeometrica = new Triangulo('Sr Triangulo para ustedes', 2, 5, 100);

let figuraGeometrica5: FiguraGeometrica = new Triangulo('El Exk4l3n0',  -3, -4, 100, 'Yo no fui');

var resultado: boolean = figuraGeometrica4 instanceof FiguraGeometrica;


console.log(figuraGeometrica2.getPrincipalInf());
console.log(figuraGeometrica4.getPrincipalInf());
console.log(figuraGeometrica5.getPrincipalInf());