/**Resuelva el siguiente problema usando programación Orientada objetos 
 * y herencia: Se necesita implementar un sistema para la venta de películas 
 * en formatos cd, dvd, blu-ray. Donde debe estar involucrado al cliente. Se debe
 *  guardar cds,  dvds, el monto total percibido por la venta de dvds. Se debe  poder
 *  calcular  el  monto total percibido por la venta de cds. Se debe poder calcular  el 
 * monto total percibido por la venta  de blu-rays.  Se debe poder calcular el monto total 
 *  percibido por la venta de cds, dvds y blu-ray. Los 3 tipos de discos
 *  deben guardar en una lista.
 */
export class Disco{
    private nombre: string; //atributos
    //private precio: number;
    precio: number;
    private categoria: string;

    constructor(nom: string, precio: number, categ: string ){
        this.nombre= nom;
        this.precio = precio;
        this.categoria =categ;
   }
}
export class Cd extends Disco{

    constructor(nom: string, pr: number, categ: string ){
        super(nom, pr, categ);
   }
}
export class Dvd extends Disco{

    constructor(nom: string, precio: number, categ: string){
        super(nom, precio, categ);
   }
}
export class BluRay extends Disco{

    constructor(nom: string, pr: number, categ: string){
        super(nom, pr, categ);
   }
}
/*********************************************************************/
export class Cliente{
    private nombre: string; //atributos
    private apellido: string;
    private edad: number;

    constructor(nom: string, ap: string, ed: number){
        this.nombre = nom;
        this.apellido = ap; 
        this.edad = ed;
   }
}
let cliente1: Cliente = new Cliente("Gladys","Sarzuri", 26);
let cliente2: Cliente = new Cliente("Deysi","Sarzuri", 24);
let cliente3: Cliente = new Cliente("Monica","Sarzuri", 28);
console.log(cliente1,cliente2, cliente3);

let dumbo: Dvd = new Dvd("Dumbo",10,"infantil");//Dvd
let rambo: Cd = new Cd("Rambo",20,"accion");
let mypelicula: Cd = new Cd("pelicula", 80, "Terror");
let hachiko: BluRay = new BluRay("hachiko", 8,"familiar");
let pinocho: Dvd = new Dvd("hachiko", 10,"familiar");//Dvd
console.log(dumbo, rambo, mypelicula, hachiko, pinocho);

/***************************************************************************/
export class VentaDisco{
   // private producto: Disco;
   producto: Disco;
    private cliente: Cliente;
    
    public constructor(producto: Disco, cliente: Cliente){
        this.producto=producto;
        this.cliente=cliente;
   }
   public montoDeLaVenta(): number{
       let monto=this.producto.precio;
       console.log(monto);
       return monto;
   }
}

let venta1: VentaDisco = new VentaDisco(dumbo, cliente1);
let venta2: VentaDisco = new VentaDisco(rambo, cliente2);
let venta3: VentaDisco = new VentaDisco(hachiko, cliente3);
let venta4: VentaDisco = new VentaDisco(pinocho, cliente1);
let venta5: VentaDisco = new VentaDisco(mypelicula, cliente3);

/*******************************************************************/
export class TiendaDisco{
    private ventas: VentaDisco[];
    private nombreTienda: string;
    
    constructor(nombre: string){
        this.nombreTienda = nombre;
        this.ventas = [];
   }
   realizarVenta(venta: VentaDisco): void{
       this.ventas.push(venta);
   }
   calcularVentaCds(): number{
       let suma = 0;
       for(let i =0; i<this.ventas.length; i++){
           let prod=this.ventas[i].producto;
           if(prod instanceof Cd){
               suma+=prod.precio;
           }
       }
       return suma;
   }
   calcularVentaDvds(): number{
       let suma = 0;
       for(let i = 0; i<this.ventas.length; i++){
           let prod = this.ventas[i].producto;
           if(prod instanceof Dvd){
               suma+=prod.precio;
           }
       }
       return suma;
   }
   calcularVentaBluRay(): number{
    let suma = 0;
    for(let i = 0; i<this.ventas.length; i++){
        let prod = this.ventas[i].producto;
        if(prod instanceof BluRay){
            suma+=prod.precio;
        }
    }
    return suma;
    }
    totalVenta(): number{
        let suma = 0;
        for(let i = 0; i<this.ventas.length; i++){
            let prod = this.ventas[i].producto;
            //if(prod instanceof Dvd){
                suma+=prod.precio;
            //}
        }
        return suma;
    }
}
/*********/
let tienda1: TiendaDisco = new TiendaDisco("MiTienda");
tienda1.realizarVenta(venta1);
tienda1.realizarVenta(venta2);
tienda1.realizarVenta(venta3);
tienda1.realizarVenta(venta4);
tienda1.realizarVenta(venta5);
// let tienda2: TiendaDisco = new TiendaDisco("Su Tienda");
// tienda2.realizarVenta(venta2);
// let tienda3: TiendaDisco = new TiendaDisco("Center");
// tienda3.realizarVenta(venta3);
let ingresosCds=tienda1.calcularVentaCds();
console.log("Los ingrsos de la venta de Cds" + ingresosCds + " Bs");
let ingresosDvds=tienda1.calcularVentaDvds();
console.log("Los ingrsos de la venta de Dvds" + ingresosDvds + " Bs");
let ingresosBluRays = tienda1.calcularVentaBluRay();
console.log("Los ingrsos de la venta de BluRay" + ingresosBluRays + " Bs");

console.log("Total Venta", tienda1.totalVenta());