/**
 * clase
 */
export class Rectangle{
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
    public desplazar(posX2: number, posY2: number): void{
        this.posX = posX2;
        this.posY = posY2;
    }
    public getArea(): number{
        let area: number = this.heigth * this.heigth;
        return  area;
     }
     public getPerimeter(): number{
        let perimeter : number = 2*this.heigth + 2* this.width;
        return  perimeter;
     }
}
 /**
  * pruebas
  */
 let rectangle1: Rectangle = new Rectangle(2,3,1,4);
 console.log(rectangle1);
 rectangle1.setHeigth(55);
 rectangle1.setWidth(80);
 console.log(rectangle1);

 
 rectangle1.desplazar(110,110);
 console.log(rectangle1);
 //let  areaRectangle1: number = rectangle1.getHeigth()*rectangle1.getWidth();
 //console.log(areaRectangle1);
 let areaRectangle1: number = rectangle1.getArea();
 console.log(areaRectangle1);
 let perimeterRectangle1:  number = rectangle1.getPerimeter();
 console.log(perimeterRectangle1);

 
