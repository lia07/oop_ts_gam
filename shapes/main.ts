/**
 * clase
 */
export class Rectangulo{
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
}
 /**
  * pruebas
  */
let posx1: Rectangulo = new Rectangulo(2,3,2,5);
//let posx2: Rectangulo = new Rectangulo(1,3); 
posx1.setPosX(2);
console.log(posx1.getPosX());
console.log(posx1);
//console.log(posx2);