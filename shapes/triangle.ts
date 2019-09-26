export class Triangle{

    private heigth: number;
    private width: number;

    public constructor( h: number, w: number){
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

    public getArea(): number{
        let area: number = (this.heigth * this.heigth)/2;
        return  area;
     }
}
/**
 * prueba
 */
let triangle1: Triangle = new Triangle(2,3,1,4);
 console.log(triangle1);
 triangle1.setHeigth(5);
 triangle1.setWidth(4);
 console.log(triangle1);

 let areaTriangle1: number = triangle1.getArea();
 console.log(areaTriangle1);