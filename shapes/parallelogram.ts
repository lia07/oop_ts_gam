
/**
 * clase
 */
export class Parallelogram{
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
        let area: number = this.heigth * this.width;
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
 let parallelogram1: Parallelogram = new Parallelogram(2,3,1,4);
 console.log(parallelogram1);
 parallelogram1.setHeigth(5);
 parallelogram1.setWidth(5);
 console.log(parallelogram1);

 let areaParallelogram1: number = parallelogram1.getArea();
 console.log("area",areaParallelogram1);
 let perimeterParallelogram1:  number = parallelogram1.getPerimeter();
 console.log("perimetro", perimeterParallelogram1);