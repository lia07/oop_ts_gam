/**
 * Desarrollar una clase CD con los siguientes atributos.
Canciones: un array (lista) de objetos de la clase canción.
Contador: la siguiente posición libre de array(lista) canciones, y los siguientes métodos:
CD():Constructor predeterminado (creara el array canciones).
numeroCanciones(); devuelve el valor del contador de canciones.
dameCancion(int):devuelve la canción que se encuentra en la posición  indicada.
grabarCancion(int, cancion): cambia la canción de la posición indicada por la nueva canción proporcionada.
Agregar(Cancion): agrega al final del array la Cancion proporcionada.
Elemina(int): elimina la Cancion que se encuentra en la posición indicada.
 */
export  class Cancion{
    protected nombre: string;
    protected cancion: string;
    protected genero: string;
    protected autor: string;

    public constructor(nombre: string, cancion:string, genero:string, autor: string){
        this.nombre = nombre;
        this.cancion = cancion;
        this.genero = genero;
        this.autor = autor;
    }
}
export  class  Cd{
    //private cancion: Cancion[];
    private listaCancion: Cancion[];
    private contador: number;

    public constructor(){
        //this.cancion=cancion;
        this.listaCancion = [];
        this.contador=0;
    }
    // public dameCancion(listaCancion: Cancion): void{
    //     let listaCanciones:Cancion;
    // }
    public numeroCancion(listaCancion: number): number{
        return this.contador;
    }
    public  darCancion(posicionCancion: number): Cancion{
        return this.listaCancion[posicionCancion];
    }
    // public crearCancion(listaCancion: Cancion): void{
    //     this.listaCancion.push(listaCancion);
    // }
    public grabarCanion(listaCanciones: Cancion, contador:number):void{
       this.listaCancion[contador]=listaCanciones;
    }

    public agregarCancion(listaCancion: Cancion): void{
        this.listaCancion.push(listaCancion);
        this.contador ++;
    }
    
    public eliminarCancion(listaCancion: number): void{
        this.listaCancion.splice(listaCancion);
        this.contador--;
    }
}
/**
 * pruebas
 */
let cancion1: Cancion = new Cancion("Sabor sabor","cumbia","Los Vivis", "");
let cancion2: Cancion = new Cancion("RataBlanca","Rock","James","");
let cancion3: Cancion = new Cancion("RataBlanca","Rock","James","");

let cd1: Cd = new Cd();
 cd1.agregarCancion(cancion1);
 cd1.agregarCancion(cancion2);
 cd1.agregarCancion(cancion3);
console.log(cd1);

 cd1.eliminarCancion(2);
 console.log(cd1);


