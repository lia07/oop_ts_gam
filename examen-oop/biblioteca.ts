
export  class Documento{
    protected codigo: number;
    protected cantidadEjDisponibles: number;
    protected cantidadEjPrestados: number;

    public constructor(codigo:number,cantidadEjDisponibles:number, cantidadEjPrestados:number){
        this.codigo = codigo;
        this.cantidadEjDisponibles = cantidadEjDisponibles;
        this.cantidadEjPrestados = cantidadEjPrestados; 
    }
    public incrementarCantDisp(): void{
        this.cantidadEjDisponibles++;
    }
    public incrementarCantPrest(): void{
        this.cantidadEjDisponibles++;
    }
    public decrementarCantDisp(): void{
        this.cantidadEjDisponibles--;
    }
    public decrementarCantPrest(): void{
        this.cantidadEjDisponibles--;
    }
}

export  class Libro extends Documento{
    private titulo: string;
    private editorial: string;
    private edicion: string;
    private autor: string;

    public constructor(codigo:number, cantidadEjDisponibles:number, cantidadEjPrestados:number,titulo:string, editorial: string, edicion: string, autor: string){
        super(codigo, cantidadEjDisponibles, cantidadEjPrestados);
        this.titulo = titulo;
        this.editorial = editorial;
        this.edicion = edicion;
        this.autor = autor;
    }
    public getAutor(): string{
    }
}
export  class Revista extends Documento{
    private nombre: string;
    private volumen: string;
    private area: string;

    public constructor(codigo:number, cantidadEjDisponibles:number, cantidadEjPrestados: number,nombre:string, volumen: string, volumen: string, area: string){
        super(codigo, cantidadEjDisponibles, cantidadEjPrestados);
        this.nombre = nombre; 
        this.volumen = volumen;
        this.area = area;
    }
}

export  class Periodico extends Documento{
    private nombre: string;
    private fecha: string;
    private contenido: string;

    public constructor(codigo:number, cantidadEjDisponibles:number, cantidadEjPrestados:number, nombre:string, fecha: string, contenido: string){
        super(codigo, cantidadEjDisponibles, cantidadEjPrestados);
        this.nombre = nombre;
        this.fecha = fecha;
        this.contenido = contenido; 
    }
}

export  class Lector{
    private nombre: string;
    private apellido: string;
    private ci: string;

    public constructor(nombre:string, apellido: string, ci: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ci = ci; 
    }
}

export  class Prestamo{
    private lector: Lector;
    private documento: Documento;
    private fecha: string;

    public constructor(lector:Lector, documento: Documento, fecha: string){
        this.lector = lector;
        this.documento = documento;
        this.fecha  = fecha;
    }
    public prestamoDocumento(presamo: Prestamo): void{
        prestamo.
    }
}

export  class Devolucion{
    private lector: Lector;
    private documento: Documento;
    private fecha: string;

    public constructor(lector:Lector, documento: Documento, fecha: string){
        this.lector = lector;
        this.documento = documento;
        this.fecha  = fecha;
    }
}
export  class Biblioteca{
    private listaPrestamos: Prestamo[];
    private listaDevoluciones: Prestamo[];
    private listaDocumentos: Documento[];

    constructor(){
        this.listaDocumentos = [];
        this.listaDevoluciones=[];
        this.listaPrestamos = [];
    }
    public prestarDocumento(prestamo: Prestamo): void{
        prestamo.getDocumento().decrementarCantDisp();
        prestamo.getDocumento().incrementarCantDisp();
        this.listaPrestamos.push(prestamo);
    }
    /** 
     *buscar libros por autor
    */
    public buscarLibloPorAutor(nombreAutor: string): Libro[]{
        let listaLibrosAutoresRespueta: Libro[]=[];
        for(let i = 0; i< this.listaDocumentos.length;i++){
            let documento: Documento = this.listaDocumentos[i];
            if(documento instanceof Libro){
                if(documento.getAutor()==nombreAutor){
                    listaLibrosAutoresRespuesta.push(documento);
                }
            }
        }
        return listaLibrosAutoresRespueta; 
    }
    public devolverDocummento(devolver: Prestamo): void{
        this.devolverDocumento.push(prestamo);

    }
    public agregarDocumento(documento: Documento):void{
        this.listaDocumentos.push(documento);
    }
}  


let bibliotecaMunicipal:Biblioteca = new Biblioteca();
let documento1: Documento = new Libro(1001,4,0, "Harry Potter y la piedra Filosofa", "wisard",200,"JKRowling");
let documento2: Documento = new Libro(1002,2,0,"La Biblia de los caidos", "la sombra del gris","wisard",2005,"Fernando Trujillo");
let documento3: Documento = new Libro(1003,3,0,"La comunidad del anillo", "coquito","nnnn",2006,"fghjhk");

let documento4: Documento = new Revista(2003,3,0,"Condorito en el espacio",2, "entretenimiento");
let documento5: Documento = new Revista(2006,9,0,"Muy interesante",3,"cultura");
let documento6: Documento = new Revista(2008,8,0,"OH",6, "FARANDULA");

let documento7: Documento = new Periodico(20010,8, 0,"Los tiempos",6, "FARANDULA");
let documento8: Documento = new Periodico(20011,8, 0,"El deber",6, "FARANDULA");
let documento9: Documento = new Periodico(20012,8, 0,"OH",6, "FARANDULA");

bibliotecaMunicipal.agregarDocumento(documento1);
bibliotecaMunicipal.agregarDocumento(documento2);
bibliotecaMunicipal.agregarDocumento(documento3);
bibliotecaMunicipal.agregarDocumento(documento4);
bibliotecaMunicipal.agregarDocumento(documento5);
bibliotecaMunicipal.agregarDocumento(documento6);

// console.log(bibliotecaMunicipal:buscarLibroAutor("JRR Tolking"));
let lector1: Lector =new Lector("Brian", "Coria", 456321);
let lector2: Lector =new Lector("Aleyda", "Soliz", 4563211);
let lector3: Lector =new Lector("Noelia", "Ustariz", 4563421);

let prestamo1: Prestamo = new Prestamo(lector1, documento1, "07/10/19");
let prestamo2: Prestamo = new Prestamo(lector1, documento1, "07/10/19");
let prestamo3: Prestamo = new Prestamo(lector1, documento1, "07/10/19");
let prestamo4: Prestamo = new Prestamo(lector1, documento1, "07/10/19");
let prestamo5: Prestamo = new Prestamo(lector1, documento1, "07/10/19");


console.log("<<<<<<<<<<Antes del prestamo>>>>>>>>>");
 console.log(documento4);

bibliotecaMunicipal.prestarDocumento(prestamo1);
bibliotecaMunicipal.prestarDocumento(prestamo2);
bibliotecaMunicipal.prestarDocumento(prestamo3);
bibliotecaMunicipal.prestarDocumento(prestamo4);
bibliotecaMunicipal.prestarDocumento(prestamo5);




bibliotecaMunicipal.devolverDocummento(prestamo2);

console.log(bibliotecaMunicipal);

// public getAutor(): string{
// }

