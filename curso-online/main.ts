/**
 * Se necesita resolver el siguiente problema usando programacion
 *  orientada a objetos.
 * Se desea realizar un sistema de venta de curso online como por ejemplo Udemy,
 * Platzi, etc.
 * Para ello se necesita interactuar con estudiantes, profesores de los mismos
 * se necesita registrar su informacion basica como nombre, apellido, correo, 
 * direccion; por otras parte se necesita interactuar  con los cursos que se 
 * impartiran de los mismos se necesita registrar su precio, nombre, 
 * descripcion; finalmente se desea guardar el registro de los estudiantes 
 * que compraron algun  curso. Un estudiante o profesor  puede tener una o mas 
 * direcciones, al mismo tiempo una direccion  esta compuesta por la siguiente
 * informacion: ciudad, barrio, calle.
 * Para los profesores en particular se necesita guardar su profesion.
 */

 export class Curso{
    private nombre: string; //atributos
    private descripcion: string;
    private precio: number; 

    constructor(nomC: string, desc: string, precio: number){
         this.nombre = nomC;
         this.descripcion = desc; 
    }
   
}
export class CompraCurso{
    private curso: Curso; //atributos
    private estudiante: Estudiante;
    private fecha: string;
    private direccion: Direccion[];

    constructor(cu: Curso, est: string, fe: string, dir: Direccion){
        this.curso = cu;
        // this.estudiante = est; 
        this.fecha= fe;
        // this.direccion = dir;
   }
}
 
export class Profesor{
    private nombre: string; //atributos
    private apellido: string;
    private correo: string;
    private profesion: string; 
    private direccion: Direccion[];

    constructor(nomP: string, ap: string, corr: string, prof: String, direcP: Direccion[]){
        this.nombre = nomP;
        this.apellido = ap;
        this.correo = corr;
        // this.profesion = prof;
        // this.direccion = dirP; 
   }
}

export class Estudiante{
    private nombre: string; //atributos
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];

    constructor(nomE: string, ape: string, corre: string, direcE: Direccion[]){
        this.nombre = nomE;
        this.apellido = ape;
        this.correo = corre;
        this.direccion = direcE; 
   }
}

export class Direccion{
    private ciudad: string;
    private barrio: string;
    private calle: string

    constructor(ci: string, bar: string, call: string){
        this.ciudad = ci;
        this.barrio = bar;
        this.calle = call;
   }
}