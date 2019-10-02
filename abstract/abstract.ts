
export abstract class FiguraG{

    constructor(private ancho1: number, private alto: number){
        
    }
    abstract getArea(): number;
    
    abstract getVolumen(): number;

    getAncho1(): number{
        return this.ancho1;
    }
    // getAncho2(): number{
    //     return this.ancho2;
    // }
    getAlto(): number{
        return this.alto;
    }
}
export class Rectangulo extends FiguraG{
    private ancho2: number;

    constructor(ancho1: number, alto: number, ancho2: number){
        super(ancho1, alto); 
        this.ancho2=ancho2;  
    }
    getAncho2():number{
        return this.ancho2;
    }
    getArea(): number{
        let area = this.getAncho1()* this.getAlto();
        return area;
    }
    getVolumen(): number{
        let volumen = this.getAncho1()* this.getAlto()*this.getAncho2();
        return volumen;
    }
}
let rectangulo1: Rectangulo = new Rectangulo(2,2,4);
console.log(rectangulo1.getArea());

let rectangulo2: Rectangulo = new Rectangulo(4,4,8);
console.log("volumende rectangulo es:",rectangulo2.getVolumen());



export class Triangulo extends FiguraG{
    private anchox: number;

    constructor(ancho1: number, alto: number, anchox: number){
        super(ancho1, alto);  
        this.anchox=anchox;
    }
    getAnchox():number{
        return this.anchox;
    }
    getArea(): number{
        let area = (this.getAncho1()* this.getAlto())/2;
        return area;
    }
    getVolumen(): number{
        // let volumen = (this.getArea()* this.getAlto())/3;
        let volumen = (this.getAnchox()* this.getAnchox()*this.getAlto())/3;
        return volumen;//area de la base por altura/3
    }  
}
let triangulo1: Triangulo = new Triangulo(4,4,5);
console.log(triangulo1.getArea());

let triangulo2: Triangulo = new Triangulo(4,4,7);
console.log("volumen es:", triangulo1.getVolumen());

