
export class Trapezoid{

    private heigth: number;
    private width: number;
    private a: number;

    public constructor(a: number, h: number, w: number){
        this.heigth = h;
        this.width = w;
    }
    public setHeigth( h: number):void{
        this.heigth = h;
    }
    public getHeigth(): number{
       return  this.heigth;
    }
    public setWidth( w: number):void{
        this.width = w;
    }
    public getWidth(): number{
       return  this.width;
    }
    public setA( a1: number):void{
        this.a = a1;
    }
    public getA(): number{
       return  this.a;
    }

    public getArea(): number{
        let area: number = this.heigth * this.a;
        return  area;
     }
}
/**
 * prueba
 */
let trapezoid1: Trapezoid = new Trapezoid(2,3,1);
 console.log(trapezoid1);
 trapezoid1.setHeigth(5);
 trapezoid1.setWidth(4);
 console.log(trapezoid1);

 let areaTrapezoid1: number = trapezoid1.getArea();
 console.log(areaTrapezoid1);