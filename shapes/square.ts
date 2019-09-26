/**
 * clase
 */
export class Square{
    private posX: number;
    private posY: number;
    private heigth: number;
    private width: number;

    public constructor(px: number, py: number, h: number, w: number){
        this.posX = px;
        this.posY = py;
        this.heigth = h;
        this.width = w;
    }

    public setPosX( px: number):void{
        this.posX = px;
    }
    public getPosX(): number{
       return  this.posX;
    }
    public setPosY( py: number):void{
        this.posY = py;
    }
    public getPosY(): number{
       return  this.posY;
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
        let area: number = this.heigth * this.heigth;
        return  area;
     }
     public getPerimeter(): number{
        let perimeter : number = 4*this.heigth;
        return  perimeter;
     } 
}
 /**
  * pruebas
  */
 let square1: Square = new Square(2,3,1,4);
 console.log(square1);
 square1.setHeigth(2);
 square1.setWidth(3);
 console.log(square1);

 let areaParallelogram1: number = square1.getArea();
 console.log("area",areaParallelogram1);

 let perimeterSquare1:  number = square1.getPerimeter();
 console.log("perimetro", perimeterSquare1);