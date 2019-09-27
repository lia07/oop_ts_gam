export class Cuenta {
    private saldo: number; //atributos
    private movimientos: string[]; 

    constructor(sald: number, mov: string[]){
         this.saldo = sald;
         this.movimientos = mov; 
    }
    public setSaldo(value: number):void{
        this.saldo = value;
    }
    public getSaldo(): number{
        return this.saldo;
    }
    public setMovimientos(value: string[]):void{
         this.movimientos = value;
    }
    public getMovimiento(): string[]{
        return  this.movimientos;
    }
    public setIngreso(monto: number){
        this.saldo = this.saldo + monto;
        this.movimientos.push(`Ingreso de ${monto} Bs`)
     }
    public setReintegro(montoReintegro: number){
        this.saldo = this.saldo + montoReintegro;
        this.movimientos.push(`Reintegro de ${montoReintegro} Bs`);
    }
    public setTransferencia(montoTransferencia: number){
        this.saldo = this.saldo - montoTransferencia;
        this.movimientos.push(`Transferencia ${montoTransferencia} Bs`);  
    }
}
/**
 * pruebas
 */
let cuenta1: Cuenta = new Cuenta(250,[]);
cuenta1.setIngreso(450);
cuenta1.setReintegro(350);
cuenta1.setTransferencia(250);
console.log(cuenta1);
