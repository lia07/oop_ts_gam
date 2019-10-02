export class Book {
    private codigo: number; //atributos
    private nombreAutor: string; 
    private nombreTitulo: string; 
    private genero: string;
    private estado: ;

    constructor(cod: number, nomA: string, nomT: string, g: string, es: string){
         this.codigo = cod;
         this.nombreAutor = nomA;
         this.nombreTitulo = nomT;
         this.genero = g;
         this.estado =es; 
    }
    public setCodigo(value: number):void{
        this.codigo = value;
    }
    public getCodigo(): number{
        return this.codigo;
    }
    public setNombreAutor(nombre: string):void{
         this.nombreAutor = nombre;
    }
    public getNombreAutor(): string{
        return  this.nombreAutor;
    }
    public setNombreTitulo(nombre: string):void{
        this.nombreTitulo = nombre;
   }
   public getNombreTitulo(): string{
       return  this.nombreTitulo;
   }
    public setGenero(nombre: string):void{
         this.genero = nombre;
    }
    public getGenero(): string{
        return  this.genero;
    }
    public setEstado(estado: string):void{
        this.estado = estado;
   }
   public getEstado(): string{
       return  this.estado;
   }


    public setIngreso(monto: number){
        this.saldo = this.saldo + monto;
        this.movimientos.push(`Ingreso de ${monto} Bs`)
     }
    public setPrestamo(verificar: number){
        this.saldo = this.saldo + montoReintegro;
        this.movimientos.push(`Reintegro de ${montoReintegro} Bs`);
    }
    public setDevolucion(montoTransferencia: number){
        this.saldo = this.saldo - montoTransferencia;
        this.movimientos.push(`Transferencia ${montoTransferencia} Bs`);  
    }
    // public string toString(){
    //     string =s;
    //     s= this.getCodigo()+ ""+this.getNombreAutor()+""+this.getNombreTitulo()+""+this.getGenero();
    // return s;
    // }
}
/**
 * pruebas
 */
let cuenta1: Cuenta = new Cuenta(250,[]);
cuenta1.setIngreso(450);
cuenta1.setReintegro(350);
cuenta1.setTransferencia(250);
console.log(cuenta1);