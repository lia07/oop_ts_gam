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
 * 
 * Crear 5 instancias de la clase curso.
 * Crear 10instancias  de la clase estudiante
 * Crear 2 instancias de la clase Docente.
 * Crear 12 instancias  de compraCurso.
 * Hacer correr y verificar el correcto funcionamiento de las clases implementadas.
 * Subir  su repositorio.
 */

 export class Curso{
    private nombre: string; //atributos
    private descripcion: string;
    private precio: number; 
    private profesor: Profesor;

    constructor(nomC: string, desc: string, pre: number,  profe: Profesor){
         this.nombre = nomC;
         this.descripcion = desc; 
         this.precio = pre;
         this.profesor= profe;
    }
}
export class CompraCurso{
    private curso: Curso; //atributos
    private estudiante: Estudiante;
    private fecha: string;

    constructor(cu: Curso, est: Estudiante, fe: string){
        this.curso = cu;
        this.estudiante = est; 
        this.fecha= fe;
   }
}
 
export class Profesor{
    private nombre: string; //atributos
    private apellido: string;
    private correo: string;
    private profesion: string; 
    private direccion: Direccion[];

    constructor(nomP: string, ap: string, corr: string, pro: string, direcP: Direccion[]){
        this.nombre = nomP;
        this.apellido = ap;
        this.correo = corr;
        this.profesion = pro;
        this.direccion = direcP; 
   }
   public setNombre(nomP: string): void{
    this.nombre = nomP;
   }
   public getNombre(): string{
    return this.nombre;
   }
   public setApellido(ap: string): void{
    this.apellido = ap;
   }
   public getApellido(): string{
    return this.apellido;
   }
   public setCorreo(corr: string): void{
    this.correo = corr;
   }
   public getCorreo(): string{
    return this.correo;
   }
   public setProfesion(profe: string): void{
    this.profesion = profe;
   }
   public getProfesion(): string{
    return this.profesion;
   }
   public setDireccion(direcP: Direccion[]): void{
    this.direccion = direcP;
   }
   public getDireccion(): Direccion[]{
    return this.direccion;
   }  
}
export class Estudiante{
    private nombre: string; 
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];

    constructor(nomE: string, ape: string, corre: string, direcE: Direccion[]){
        this.nombre = nomE;
        this.apellido = ape;
        this.correo = corre;
        this.direccion = direcE; 
   }
    public setNombre(nomE: string):void{
        this.nombre = nomE;
   }
   public getNombre(): string{
        return this.nombre;
    }
   public setApellido(ape: string):void{
        this.apellido = ape;
    }
   public getApellido(): string{
    return this.apellido;
   } 
   public setCorreo(corre: string): void{
       this.correo=corre;
   }
   public getCorreo(): string{
       return this.correo;
   }
    public setDireccion(direcE: Direccion[]): void{
    this.direccion = direcE;
   }
   public getDireccion(): Direccion[]{
    return this.direccion;
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
   public setCiudad(ci: string): void{
    this.ciudad = ci;
   }
   public getCiudad(): string{
    return this.ciudad;
   }
   public setBarrio(ba: string): void{
    this.barrio = ba;
   }
   public getBarrio(): string{
    return this.barrio;
   }
   public setCalle(cll: string): void{
    this.calle = cll;
   }
   public getCalle(): string{
    return this.calle;
   }
}
/**
 * Prueba
 */
//Crear 10instancias  de la clase estudiante
let direccion1: Direccion =new Direccion("LPZ", "NOSE", "16 DE JULIO");
let dir: Direccion[] = [direccion1];
let est1: Estudiante = new Estudiante("Gladys","Sarzuri", "sarzuri@gmail.com", dir);
let est2: Estudiante = new Estudiante("Erlinda","Chambi", "erlinda@gmail.com", dir);
let est3: Estudiante = new Estudiante("Gio","Brañez", "giob@gmail.com", dir);
let est4: Estudiante = new Estudiante("Miguel","Lopez", "miguell@gmail.com", dir);
let est5: Estudiante = new Estudiante("Eduardo","Gomez", "gomez@gmail.com", dir);
let est6: Estudiante = new Estudiante("Luis","Jadin", "lui@gmail.com", dir);
let est7: Estudiante = new Estudiante("Aleyda","Choque", "choque@gmail.com", dir);
let est8: Estudiante = new Estudiante("Ariel","Claros", "ariel@gmail.com", dir);
let est9: Estudiante = new Estudiante("Brian","Padilla", "briani@gmail.com", dir);
let est10: Estudiante = new Estudiante("Henry","Zerda", "henry@gmail.com", dir);
console.log(est1);
console.log(est2);
console.log(est3);
console.log(est4);
console.log(est5);
//Crear 2 instancias de la clase Docente.
let direccion2: Direccion =new Direccion("LPZ", "NOSE", "16 DE JULIO");
let dir2: Direccion[] = [direccion2];
let direccion3: Direccion =new Direccion("CBB", "tunari", "15 DE Junio");
let dir3: Direccion[] = [direccion3];
let prof1: Profesor = new Profesor("Grover","Plaza", "grover@gmail.com", "Ingeniero", dir2);
let prof2: Profesor = new Profesor("Angel","Antezana", "angel@gmail.com", "Ingeniero", dir3);
let prof3: Profesor = new Profesor("Ricardo","Valencia", "ricardo@gmail.com", "Ingeniero", dir3);
let prof4: Profesor = new Profesor("Franz","Lopez", "franz@gmail.com", "Ingeniero", dir3);
let prof5: Profesor = new Profesor("Angel2","Antezana2", "angel2@gmail.com", "Ingeniero", dir3);
console.log(prof1);
console.log(prof2);
console.log(prof3);
console.log(prof4);
console.log(prof5);

//Crear 5 instancias de la clase curso.
let curso1: Curso= new Curso("javaScript","fundamentos de js", 200, prof2);
let curso2: Curso= new Curso("angular", "angular basico", 400, prof5);
let curso3: Curso= new Curso("python","Fundamentos de python", 300, prof4);
let curso4: Curso= new Curso("django","Fundamentos de django", 300, prof3);
let curso5: Curso= new Curso("vuejs","Fundamentos de vuejs", 300, prof1);
console.log(curso1);
console.log(curso2);
console.log(curso3);
console.log(curso4);
console.log(curso5);

//Crear 12 instancias  de compraCurso.
let comprarCurso1: CompraCurso = new CompraCurso(curso1,est1,"27 de septiembre de 2019");
let comprarCurso2: CompraCurso = new CompraCurso(curso2,est2,"7 de septiembre de 2019");
let comprarCurso3: CompraCurso = new CompraCurso(curso3,est3,"8 de septiembre de 2019");
let comprarCurso4: CompraCurso = new CompraCurso(curso4,est4,"9 de septiembre de 2019");
let comprarCurso5: CompraCurso = new CompraCurso(curso5,est5,"10 de septiembre de 2019");
let comprarCurso6: CompraCurso = new CompraCurso(curso1,est6,"11 de septiembre de 2019");
let comprarCurso7: CompraCurso = new CompraCurso(curso2,est7,"fecha");
let comprarCurso8: CompraCurso = new CompraCurso(curso3,est8,"fecha");
let comprarCurso9: CompraCurso = new CompraCurso(curso4,est9,"fecha");
let comprarCurso10: CompraCurso = new CompraCurso(curso5,est10,"fecha");
let comprarCurso11: CompraCurso = new CompraCurso(curso1,est1,"fecha");
let comprarCurso12: CompraCurso = new CompraCurso(curso2,est2,"fecha");
console.log(comprarCurso1, comprarCurso2, comprarCurso3,comprarCurso4, comprarCurso5);
console.log(comprarCurso6, comprarCurso7, comprarCurso8, comprarCurso9,comprarCurso10,comprarCurso11);
console.log(comprarCurso12);

//Crear 12 instancias  de compraCurso.
let comprarCurso13: CompraCurso = new CompraCurso(curso1,est1,"28 de septiembre de 2019");
let comprarCurso14: CompraCurso = new CompraCurso(curso1,est2,"29 de octubre de 2019");
let comprarCurso15: CompraCurso = new CompraCurso(curso1,est3,"30 de noviembre de 2019");
let comprarCurso16: CompraCurso = new CompraCurso(curso1,est4,"31 de diciembre de 2019");
let comprarCurso17: CompraCurso = new CompraCurso(curso1,est1,"32 de septiembre de 2019");
let comprarCurso18: CompraCurso = new CompraCurso(curso1,est1,"33 de septiembre de 2019");
let comprarCurso19: CompraCurso = new CompraCurso(curso1,est1,"34 de septiembre de 2019");
let comprarCurso20: CompraCurso = new CompraCurso(curso1,est1,"35 de septiembre de 2019");
let comprarCurso21: CompraCurso = new CompraCurso(curso1,est1,"36 de septiembre de 2019");
let comprarCurso22: CompraCurso = new CompraCurso(curso1,est1,"37 de septiembre de 2019");
let comprarCurso23: CompraCurso = new CompraCurso(curso1,est1,"38 de septiembre de 2019");
let comprarCurso24: CompraCurso = new CompraCurso(curso1,est1,"39 de septiembre de 2019");
console.log(comprarCurso13,comprarCurso14, comprarCurso15,comprarCurso16, comprarCurso17,comprarCurso18);
console.log(comprarCurso19,comprarCurso20,comprarCurso21, comprarCurso22,comprarCurso23,comprarCurso24);